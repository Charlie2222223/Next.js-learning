import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";  // 修正: compareを追加でインポート
import jwt from "jsonwebtoken";

const generatePassword = async (password) => {
    const salt = await genSalt();
    return await hash(password, salt);
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, {
        expiresIn: maxAge,
    });
}

/**
 * 	1.	PrismaClientを使ってデータベース接続を確立。
	2.	リクエストのボディからemailとpasswordを取得し。
	3.	emailが既に存在するかを確認します。存在する場合は400ステータスコードでエラーメッセージを返す。
	4.	パスワードをハッシュ化し、新しいユーザーをデータベースに作成。
	5.	作成されたユーザー情報とJWTトークンを返す。
 */
export const signUp = async (req, res, next) => {
    try {
        const prisma = new PrismaClient();
        const { email, password } = req.body;
        if (email && password) {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(400).send("Email already exists");
            }

            const user = await prisma.user.create({
                data: {
                    email,
                    password: await generatePassword(password),
                },
            });
            return res
            .status(200)
            .json({ 
                user: { id: user.id, email: user.email },
                jwt:createToken(email,user.id), 
            });
        }
        return res.status(400).send("Email and Password Required");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error.");
    }
};

/**
 * 	1.	PrismaClientを使ってデータベース接続を確立します。
	2.	リクエストのボディからemailとpasswordを取得します。
	3.	emailに対応するユーザーが存在するかを確認します。存在しない場合は400ステータスコードでエラーメッセージを返します。
	4.	入力されたパスワードとデータベースに保存されたハッシュ化パスワードを比較します。一致しない場合は400ステータスコードでエラーメッセージを返します。
	5.	ユーザー情報とJWTトークンを返します。

 */
export const login = async (req, res, next) => {
    try {
        const prisma = new PrismaClient();
        const { email, password } = req.body;
        if (email && password) {
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return res.status(400).send("User not found.");
            }

            const auth = await compare(password, user.password);
            if (!auth) {
                return res.status(400).send("Invalid password");
            }


            return res
            .status(200)
            .json({ 
                user: { id: user.id, email: user.email },
                jwt:createToken(email,user.id), 
            });
        }
        return res.status(400).send("Email and Password Required");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error.");
    }
};

export const getUserInfo = (req, res, next) => {}; 

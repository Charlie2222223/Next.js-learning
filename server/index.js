import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/AuthRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config();        //.envファイルに設定された環境変数を読み込み


/*
Expressアプリケーションのインスタンスを作成し、サーバーがリッスンするポートを設定。
*/
const app = express();
const port = process.env.PORT || 3001;

/*
CORSのオプションを設定。これにより、特定のオリジンからのリクエストを許可し、クッキーなどの認証情報を含めることができる
*/
const corsOptions = {
  origin: process.env.PUBLIC_URL,  // フロントエンドのオリジンを指定
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,  // クレデンシャルをサポート
};

/*
CORS、クッキーパーサー、JSONパーサーのミドルウェアを設定します。
*/
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

/*
認証に関するルートを設定。/api/authのエンドポイントに対して認証ルートをマッピング
*/
app.use("/api/auth", authRoutes);

/*
指定したポートでサーバーを起動し、起動成功時にメッセージをコンソールに出力
*/
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

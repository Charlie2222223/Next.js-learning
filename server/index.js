import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/AuthRoutes";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;  // 大文字の「PORT」を使用

app.use(cors(
    {prigin:[process.env.PUBLIC_URL],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);  // バックティックと正しい変数名を使用
});

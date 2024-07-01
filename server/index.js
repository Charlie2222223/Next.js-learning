import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT;  // 大文字の「PORT」を使用

app.use(cors({prigin:[process.env.PUBLIC_URL]}));

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);  // バックティックと正しい変数名を使用
});

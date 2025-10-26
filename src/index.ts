import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 9100;
const host =process.env.HOST || "localhost"
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
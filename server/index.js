import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import cors from 'cors'

dotenv.config();
connectDb();
const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173/"
}))

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

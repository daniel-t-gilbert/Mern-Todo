import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDb();
const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

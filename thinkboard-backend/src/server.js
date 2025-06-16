import express from "express";
import noteRouter from "./routes/notes.route.js";
import connectDB from "./config/db.js";
import cors from "cors";

const PORT = process.env.PORT || 5001;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/notes", noteRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
  });
});

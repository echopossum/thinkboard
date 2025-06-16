import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNote,
  updateNote,
} from "../controllers/notes.controller.js";

const noteRouter = express.Router();

noteRouter.get("/", getAllNotes);

noteRouter.get("/:id", getNote);

noteRouter.post("/", createNote);

noteRouter.put("/:id", updateNote);

noteRouter.delete("/:id", deleteNote);

export default noteRouter;

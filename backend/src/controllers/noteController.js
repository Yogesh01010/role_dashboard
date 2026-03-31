import { Note } from "../models/Note.js";

export const createNote = async (req, res) => {
  const note = await Note.create({
    ...req.body,
    userId: req.user.id,
  });

  res.json(note);
};

export const getNotes = async (req, res) => {
  const notes = await Note.find({ userId: req.user.id });
  res.json(notes);
};
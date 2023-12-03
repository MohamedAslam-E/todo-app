import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: String,
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Todo", todoSchema);

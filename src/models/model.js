import { Schema } from "mongoose";

const NewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const NewModel = mongoose.model("NewModel", NewSchema);

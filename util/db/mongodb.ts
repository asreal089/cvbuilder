//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URI } = process.env

// connection function
export const connectToDatabase = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR TODO SCHEMA
  const TodoSchema = new mongoose.Schema({
    nome: String,
    localidade: String,
  })

  // OUR TODO MODEL
  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

  return { conn, Todo }
}
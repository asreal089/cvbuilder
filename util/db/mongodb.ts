//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"
import { Experiencia } from "../models/types"
// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URI } = process.env

// connection function
export const connectToDatabase = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR TODO SCHEMA
  const CvSchema = new mongoose.Schema({
    nome: String,
    localidade: String,
    email: String,
    links: [[String]],
    cover_letter: String,
    habilidades: [[String]],
    experiencia: [[{
      empresa: String,
      incio: String,
      fim: String,
      descricao: String,
    }]],
    cursos: [[{
      instituicao: String,
      duracao: String,
      descricao: String
    }]],
    conquistas: [[{
      titulo: String,
      descricao: String
    }]],
  })

  // OUR TODO MODEL
  const CV = mongoose.models.Todo || mongoose.model("CV", CvSchema)

  return { conn, CV }
}
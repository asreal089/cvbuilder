import { ObjectId } from "bson"
import mongoose from "mongoose"

const { MONGODB_URI } = process.env

export const connectToDatabase = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  const CvSchema = new mongoose.Schema({
  id_usuario: {type : String, unique : true, required : true, dropDups: true },
    nome: String,
    localidade: String,
    titulo_palavras_chave: [String],
    email: String,
    links: [String],
    cover_letter: String,
    habilidades: [String],
    experiencia: [{
      empresa: String,
      incio: String,
      fim: String,
      descricao: String
    }],
    cursos: [{
      instituicao: String,
      duracao: String,
      descricao: String
    }],
    conquistas: [{
      titulo: String,
      descricao: String
    }],
  })

  const CV = mongoose.models.CV || mongoose.model("CV", CvSchema)

  return { conn, CV }
}
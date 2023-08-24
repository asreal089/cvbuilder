import { ObjectId } from "bson";
import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  const CvSchema = new mongoose.Schema({
    id_usuario: { type: String, unique: true, required: true, dropDups: true },
    img_url: String,
    nome: String,
    localidade: String,
    titulo_palavras_chave: [String],
    email: String,
    phone_whatsapp: String,
    links: [
      {
        tipo: String,
        link: String,
      },
    ],
    linguas: [
      {
        lingua: String,
        nivel: String,
      },
    ],
    cover_letter: String,
    habilidades: [String],
    experiencia: [
      {
        titulo: String,
        empresa: String,
        incio: String,
        fim: String,
        is_current: Boolean,
        descricao: String,
      },
    ],
    cursos: [
      {
        instituicao: String,
        is_concluded: Boolean,
        termino: String,
        duracao: String,
        descricao: String,
      },
    ],
    conquistas: [
      {
        titulo: String,
        descricao: String,
      },
    ],
  });

  const CV = mongoose.models.CV || mongoose.model("CV", CvSchema);

  return { conn, CV };
};

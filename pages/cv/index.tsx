import { NextPage } from "next";
import React from "react";
import { Conquistas, Curso, Experiencia, Cv, Links, Lingua } from "../../util/models/types";
import { useSession } from "next-auth/react";
import * as cvAddEdit from "../../components/cvAddEdit";

const AddCv: NextPage = () => {
  const session: any = useSession();


  const experiencia : Experiencia ={
    empresa: "",
    incio: "",
    fim: "",
    descricao: ""
  };

  const curso : Curso ={
    instituicao: "",
    duracao: "",
    descricao: ""
  };

  const conquista :Conquistas ={
    titulo: "",
    descricao: ""
  };

  const link : Links={
    tipo: "",
    link: ""
  }

  const linguas : Lingua={
    lingua: "",
    nivel: ""
  }

  const cv : Cv={
    id_usuario: "",
    nome: "",
    titulo_palavras_chave: [""],
    localidade: "",
    email: "",
    links: [link],
    linguas: [linguas],
    cover_letter: "",
    habilidades: [""],
    experiencia: [experiencia],
    cursos: [curso],
    conquistas: [conquista]
  }

  
  
  return(
        <cvAddEdit.default data={cv}  />
      );
}

export default AddCv;

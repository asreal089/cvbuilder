import { NextPage } from "next";
import React, {
  Component,
  FunctionComponent,
  ReactElement,
  useState,
} from "react";
import { Conquistas, Curso, Experiencia, Cv } from "../../util/models/types";
import {
  Container,
  Button,
  FormGroup,
  Divider,
  TextField,
} from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import router from "next/dist/client/router";
import { Alert, AlertTitle } from "@mui/material";
import { useSession } from "next-auth/react";
import { SettingsSuggestOutlined } from "@mui/icons-material";
import CvAddEdit from "../components/cvAddEdit";

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

  const cv : Cv={
    id_usuario: "",
    nome: "",
    titulo_palavras_chave: [""],
    localidade: "",
    email: "",
    links: [""],
    cover_letter: "",
    habilidades: [""],
    experiencia: [experiencia],
    cursos: [curso],
    conquistas: [conquista]
  }
  
  return(
      <CvAddEdit data={cv}  />
      );
}

export default AddCv;

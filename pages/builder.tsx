import { NextPage } from "next";
import React, {
  Component,
  FunctionComponent,
  ReactElement,
  useState,
} from "react";
import { Conquistas, Curso, Experiencia, Cv } from "../util/models/types";
import {
  Container,
  Button,
  FormGroup,
  Divider,
  TextField,
} from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import router from "next/dist/client/router";

const Builder: NextPage = () => {
  const [nome, setNome] = useState<string>("");
  const [localidade, setLocalidade] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [titulo_palavras_chave, settitulo_palavras_chave] =
    useState<[String]>();
  const [links, setLinks] = useState<[String]>();
  const [cover_letter, setCover_letter] = useState<String>();
  const [habilidades, setHabilidades] = useState<any>([""]);
  const [experiencia, setExperiencia] = useState<Experiencia>();
  const [cursos, setCursos] = useState<Curso>();
  const [conquistas, setConquistas] = useState<Conquistas>();

  async function saveCV() {
    var cv = buildCV();
    const hostname = window.location.hostname;
    await fetch("/api/cv", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cv),
    }).then(res => {
      if(res.status == 200){
        alert("CV salvo")
      }
      console.log(res)
    })
    router.push("/")
  }

  function buildCV() {
    var cv: Cv = {
      nome: nome,
      localidade: localidade,
      email: email,
      titulo_palavras_chave: [],
      links: [],
      cover_letter: "",
      habilidades: [],
      experiencia: [],
      cursos: [],
      conquistas: [],
    };
    return cv;
  }
  function pushHabilidade() {
    let novaHabilidade = "";
    setHabilidades(["", ...habilidades]);
  }

  function setNovaHabilidade(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = habilidades.map((i: any) => i);
    temp[index] = e.target.value;
    setHabilidades(temp);
  }

  return (
    <Container className="center">
      <h2>Construa seu CV:</h2>

      <FormGroup>
        <TextField
          id="name"
          label="name"
          variant="outlined"
          type="text"
          autoComplete="name"
          required
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <br />
        <TextField
          id="localidade"
          label="localidade"
          variant="outlined"
          type="text"
          autoComplete="localidade"
          required
          onChange={(e) => {
            setLocalidade(e.target.value);
          }}
        />
        <br />
        <TextField
          id="email"
          label="email"
          type="text"
          variant="outlined"
          autoComplete="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <TextField
          id="cover-letter"
          label="Cover Later"
          type="text"
          variant="outlined"
          autoComplete="cover-letter"
          rows={5}
          multiline
          required
          onChange={(e) => {
            setCover_letter(e.target.value);
          }}
        />
        Habilidades:
        {habilidades.map((_item: any, index: number) => (
          <>
            <br />
            <TextField
              name="habilidade"
              key={"habilidade"}
              className="habilidade"
              type="text"
              label="habilidade"
              variant="outlined"
              required
              onChange={(e) => {
                setNovaHabilidade(e, index);
              }}
            />
          </>
        ))}
        <br />
        <span className="center">
          <Button variant="contained" color="primary" onClick={pushHabilidade}>
            <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
        <br />
        <Divider />
        <Button variant="contained" color="primary" onClick={saveCV}>
          Register
        </Button>
      </FormGroup>
    </Container>
  );
};

export default Builder;

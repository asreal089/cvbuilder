import { NextPage } from "next";
import DadosLinks from "./components/links";
import React, {
  Component,
  FunctionComponent,
  ReactElement,
  useState,
} from "react";
import { Conquistas, Curso, Experiencia } from "../util/models/types";
import {
  Container,
  Button,
  FormGroup,
  Divider,
  TextField,
} from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { inputClasses } from "@mui/material";

const Builder: NextPage = () => {
  
  const [dadosLinkList, setDadoslinkList] = useState<any>([]);
  const [campoHabilidades, setCampoHabilidades] = useState<any>([]);
  const [nome, setNome] = useState<String>();
  const [localidade, setLocalidade] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [titulo_palavras_chave, settitulo_palavras_chave] =
    useState<[String]>();
  const [links, setLinks] = useState<[String]>();
  const [cover_letter, setCover_letter] = useState<String>();
  const [habilidades, setHabilidades] = useState<any>([]);
  const [experiencia, setExperiencia] = useState<Experiencia>();
  const [cursos, setCursos] = useState<Curso>();
  const [conquistas, setConquistas] = useState<Conquistas>();

  const [counterHabilidade, setCounterHabilidade] = useState<number>(1);

  function saveCV() {
    console.log("Nome: " + nome);
    console.log("email: " + email);
    console.log("localidade: " + localidade);
    console.log("habilidades: " + habilidades);
  }

  function pushHabilidade() {
    let localCounter = counterHabilidade;
    const campoNovo: ReactElement<any, any> = (
      <>
        <br />
        <TextField
          className="habilidade"
          type="text"
          label="habilidade"
          variant="outlined"
          required
          onChange={(e) => {
            setNovaHabilidade(e, localCounter)
          }}
        />
      </>
    );
    setCounterHabilidade(counterHabilidade => counterHabilidade + 1);
    console.log(counterHabilidade);
    setCampoHabilidades([campoNovo, ...campoHabilidades]);
  }

  function setNovaHabilidade(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number){
      let temp = habilidades.map((i: any)=>i);
      temp[index] = e.target.value;
      console.log(index)
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
            setNovaHabilidade(e, 0)
          }}
        />
        {campoHabilidades}
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

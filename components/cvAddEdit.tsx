import React, { JSXElementConstructor, ReactElement, useState } from "react";

import {
  Conquistas,
  Curso,
  Experiencia,
  Cv,
  Links,
  Lingua,
} from "../util/models/types";
import {
  Container,
  Button,
  FormGroup,
  Divider,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Alert,
  AlertTitle,
  getLinearProgressUtilityClass,
  Input,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

interface Data {
  data: Cv;
}

function CvAddEdit({ data }: Data): JSX.Element {
  const session: any = useSession();
  const [saveSucefull, setSaveSucefull] = useState<boolean>(false);
  const [nome, setNome] = useState<string>(data.nome);
  const [localidade, setLocalidade] = useState<string>(data.localidade);
  const [email, setEmail] = useState<string>(data.email);
  const [titulo_palavras_chave, setTitulo_palavras_chave] = useState<string[]>(
    data.titulo_palavras_chave
  );
  const [linguas, setLinguas] = useState<Lingua[]>(data.linguas);
  const [links, setLinks] = useState<Links[]>(data.links);
  const [cover_letter, setCover_letter] = useState<string>(data.cover_letter);
  const [habilidades, setHabilidades] = useState<string[]>(data.habilidades);
  const [experiencia, setExperiencia] = useState<Experiencia[]>(
    data.experiencia
  );
  const [cursos, setCursos] = useState<Curso[]>(data.cursos);
  const [conquistas, setConquistas] = useState<Conquistas[]>(data.conquistas);

  async function saveCV() {
    var cv = buildCV();
    if (data._id) {
      await fetch("/api/cv/" + data._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cv),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await fetch("/api/cv", {
        body: JSON.stringify(cv),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setSaveSucefull(true);
  }

  function buildCV() {
    let cv: Cv = {
      id_usuario: session.data.user.email,
      nome: nome,
      localidade: localidade,
      email: email,
      titulo_palavras_chave: titulo_palavras_chave,
      links: links,
      linguas: linguas,
      cover_letter: cover_letter,
      habilidades: habilidades,
      experiencia: experiencia,
      cursos: cursos,
      conquistas: conquistas,
    };

    return cv;
  }
  function pushHabilidade() {
    setHabilidades([...habilidades, ""]);
  }

  function setNovaHabilidade(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = habilidades.map((i: any) => i);
    temp[index] = e.target.value;
    setHabilidades(temp);
    console.log(habilidades);
  }

  function pushPalavraChave() {
    setTitulo_palavras_chave([...titulo_palavras_chave, ""]);
  }

  function pushLink() {
    setLinks([...links, { tipo: "", link: "" }]);
  }

  function pushLingua() {
    setLinguas([...linguas, { lingua: "", nivel: "" }]);
  }

  function setNovaPalavraChave(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = titulo_palavras_chave.map((i: any) => i);
    temp[index] = e.target.value;
    setTitulo_palavras_chave(temp);
    console.log(titulo_palavras_chave);
  }

  function setNovaLinguaLingua(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = linguas.map((i: Lingua) => i);
    temp[index].lingua = e.target.value;
    setLinguas(temp);
  }

  function setNovaLinguaNivel(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = linguas.map((i: Lingua) => i);
    temp[index].nivel = e.target.value;
    setLinguas(temp);
  }

  function setNovoLinkTipo(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = links.map((i: Links) => i);
    temp[index].tipo = e.target.value;
    setLinks(temp);
  }

  function setNovoLinkLink(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = links.map((i: Links) => i);
    temp[index].link = e.target.value;
    setLinks(temp);
  }

  function setNovaExperienciaDescricao(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].descricao = e.target.value;
    setExperiencia(temp);
  }
  function pushExperiencia() {
    setExperiencia([
      ...experiencia,
      { descricao: "", empresa: "", incio: "", fim: "" },
    ]);
  }

  function setNovaExperienciaEmpresa(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].empresa = e.target.value;
    setExperiencia(temp);
  }

  function setNovaExperienciaInicio( e: any, index : number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].incio = e;
    setExperiencia(temp);
  }

  function setExperienciaFim(
    e: any,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].fim = e;
    setExperiencia(temp);
  }

  return (
    <Container>
      <h2>Construa seu CV:</h2>

      <FormGroup>
        <TextField
          id="name"
          label="name"
          value={nome}
          type="text"
          autoComplete="name"
          variant="outlined"
          required
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <br />
        <TextField
          id="localidade"
          label="localidade"
          type="text"
          variant="outlined"
          value={localidade}
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
          value={email}
          variant="outlined"
          autoComplete="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        

        <br />
        {titulo_palavras_chave.map((_element, index: number) => (
          <span key={index} className="campoFull">
            <br />
            <TextField
              name="palavras-chave"
              className="palavra-chave campoFull"
              type="text"
              label="palavra chave"
              variant="outlined"
              value={titulo_palavras_chave[index]}
              required
              onChange={(e) => {
                setNovaPalavraChave(e, index);
              }}
            />
          </span>
        ))}
        <span className="center">
          <Button
            variant="contained"
            color="primary"
            onClick={pushPalavraChave}
          >
            Palavra Chave <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
        
        {linguas.map((_element, index: number) => (
          <span key={index} className="linguas">
            <br />
            <TextField
              name="lingua"
              className="lingua"
              type="text"
              label="língua"
              variant="outlined"
              value={linguas[index].lingua}
              required
              onChange={(e) => {
                setNovaLinguaLingua(e, index);
              }}
            />

            <TextField
              name="lingua"
              className="lingua"
              type="text"
              label="nível"
              variant="outlined"
              value={linguas[index].nivel}
              required
              onChange={(e) => {
                setNovaLinguaNivel(e, index);
              }}
            />
            <br />
          </span>
        ))}

        <span className="center">
          <Button variant="contained" color="primary" onClick={pushLingua}>
            Língua <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>

        {links.map((_element, index: number) => (
          <span key={index} className="links">
            <br />
            <TextField
              name="link-desc"
              className="link desc"
              type="text"
              label="tipo de link"
              variant="outlined"
              value={links[index].tipo}
              required
              onChange={(e) => {
                setNovoLinkTipo(e, index);
              }}
            />

            <TextField
              name="link-link"
              className="link"
              type="text"
              label="link"
              variant="outlined"
              value={links[index].link}
              required
              onChange={(e) => {
                setNovoLinkLink(e, index);
              }}
            />
            <br />
          </span>
        ))}
        <span className="center">
          <Button variant="contained" color="primary" onClick={pushLink}>
            Link <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>

        <br />
        <br />
        <TextField
          id="cover-letter"
          label="Cover Later"
          type="text"
          value={cover_letter}
          variant="outlined"
          autoComplete="cover-letter"
          minRows={5}
          multiline
          required
          onChange={(e) => {
            setCover_letter(e.target.value);
          }}
        />
        <Divider />

        {habilidades.map((_element, index: number) => (
          <span key={index} className="campoFull">
            <br />
            <TextField
              name="habilidade"
              className="habilidade campoFull"
              type="text"
              label="habilidade"
              value={habilidades[index]}
              variant="outlined"
              required
              onChange={(e) => {
                setNovaHabilidade(e, index);
              }}
            />
          </span>
        ))}
        <br />
        <span className="center">
          <Button variant="contained" color="primary" onClick={pushHabilidade}>
            Habilidade <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
        <br />
        <Divider />
        <br />

        {experiencia.map((_element, index: number) => {
            return (
                <span key={index} className="campoFull">

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            className="data_picker"
                            label="data de início"
                            inputFormat="MM/dd/yyyy"
                            value={experiencia[index].incio}
                            onChange={(e)=>{setNovaExperienciaInicio(e, index)}}
                            renderInput={(params: any ) => <TextField {...params} />}

                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            className="data_picker"
                            label="data de fim"
                            inputFormat="MM/dd/yyyy"
                            value={experiencia[index].fim}
                            onChange={(e)=>{setExperienciaFim(e, index)}}
                            renderInput={(params: any ) => <TextField {...params} />}

                    />
                    </LocalizationProvider>
                    
                    <TextField
                        name="experiencia"
                        className="experiencia-empresa campoFull"
                        type="text"
                        label="Empresa"
                        value={experiencia[index].empresa}
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setNovaExperienciaEmpresa(e, index);
                        } } />
                    <br />
                    <TextField
                        name="experiencia"
                        className="experiencia campoFull"
                        type="text"
                        minRows={5}
                        variant="outlined"
                        multiline
                        label="Descrição"
                        value={experiencia[index].descricao}
                        required
                        onChange={(e) => {
                            setNovaExperienciaDescricao(e, index);
                        } } />
                </span>
            );
        })}
        <br />
        <span className="center">
          <Button variant="contained" color="primary" onClick={pushExperiencia}>
            Experiencia <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
        <br />
        <Divider />
        <br />
        <Button variant="contained" color="primary" onClick={saveCV}>
          Register
        </Button>
      </FormGroup>
      {saveSucefull && (
        <>
          <br />
          <Alert
            severity="success"
            onClose={() => {
              setSaveSucefull(false);
            }}
          >
            <AlertTitle>Sucesso!</AlertTitle>Seu Cv foi salvo.
          </Alert>
        </>
      )}
    </Container>
  );
}

export default CvAddEdit;

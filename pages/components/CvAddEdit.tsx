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
import { NotAcceptedFields } from "mongodb";

interface Data{
    data : Cv;
}

function CvAddEdit({ data }: Data): JSX.Element {

    const session: any = useSession();
    const [saveSucefull, setSaveSucefull] = useState<boolean>(false);
    const [nome, setNome] = useState<string>(data.nome);
    const [localidade, setLocalidade] = useState<string>(data.localidade);
    const [email, setEmail] = useState<string>(data.email);
    const [titulo_palavras_chave, settitulo_palavras_chave] = useState<[string]>(data.titulo_palavras_chave);
    const [links, setLinks] = useState<[string]>(data.links);
    const [cover_letter, setCover_letter] = useState<string>(data.cover_letter);
    const [habilidades, setHabilidades] = useState<[string]>((data.habilidades.length < 1 ) ?['']: data.habilidades);
    const [experiencia, setExperiencia] = useState<[Experiencia]>(data.experiencia);
    const [cursos, setCursos] = useState<[Curso]>(data.cursos);
    const [conquistas, setConquistas] = useState<[Conquistas]>(data.conquistas);
  
    async function saveCV() {
        var cv = buildCV();
        if(data._id){
            await fetch("/api/cv/"+data._id, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cv),
            }).then(res => {
                console.log(res);
            });
        }else{
            await fetch("/api/cv", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cv),
            }).then(res => {
                console.log(res);
            });
        }
        setSaveSucefull(true);
    }

    function buildCV() {
        var cv: Cv = {
            id_usuario: session.data.user.email,
            nome: nome,
            localidade: localidade,
            email: email,
            titulo_palavras_chave: titulo_palavras_chave,
            links: links,
            cover_letter: cover_letter,
            habilidades: habilidades,
            experiencia: experiencia,
            cursos: cursos,
            conquistas: conquistas
        };
        return cv;
    }
    function pushHabilidade() {
        let novaHabilidade = "";
        //setHabilidades(["", ...habilidades]);
    }

    function setNovaHabilidade(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        index: number
    ) {
        let temp = habilidades.map((i: any) => i);
        temp[index] = e.target.value;
        //setHabilidades(temp);
    }

    return (
        <Container>
            <h2>Construa seu CV:</h2>

            <FormGroup>
                <TextField
                    id="name"
                    label="name"
                    //variant="outlined"
                    value={nome}
                    type="text"
                    autoComplete="name"
                    required
                    onChange={(e) => {
                        setNome(e.target.value);
                    } } />
                <br />
                <TextField
                    id="localidade"
                    label="localidade"
                    //variant="outlined"
                    type="text"
                    value={localidade}
                    autoComplete="localidade"
                    required
                    onChange={(e) => {
                        setLocalidade(e.target.value);
                    } } />
                <br />
                <TextField
                    id="email"
                    label="email"
                    type="text"
                    value={email}
                    //variant="outlined"
                    autoComplete="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                    } } />
                <br />
                <TextField
                    id="cover-letter"
                    label="Cover Later"
                    type="text"
                    //variant="outlined"
                    autoComplete="cover-letter"
                    rows={5}
                    multiline
                    required
                    onChange={(e) => {
                        setCover_letter(e.target.value);
                    } } />
                {habilidades.map((_item: any, index: number) => (
                    <>
                        <br />
                        <TextField
                            name="habilidade"
                            key={"habilidade"}
                            className="habilidade"
                            type="text"
                            label="habilidade"
                            //variant="outlined"
                            required
                            onChange={(e) => {
                                setNovaHabilidade(e, index);
                            } } />
                    </>
                ))}
                <br />
                <span className="center">
                    <Button variant="contained" color="primary" onClick={pushHabilidade}>
                       Adicione uma Habilidade <AddCircleIcon className="center"></AddCircleIcon>
                    </Button>
                </span>
                <br />
                <Divider />
                <Button variant="contained" color="primary" onClick={saveCV}>
                    Register
                </Button>
            </FormGroup>
            {saveSucefull && (
                <>
                    <br />
                    <Alert severity="success" onClose={() => { setSaveSucefull(false); } }>
                        <AlertTitle>Sucesso!</AlertTitle>Seu Cv foi salvo.
                    </Alert>
                </>
            )}
        </Container>
    );
}

export default CvAddEdit;
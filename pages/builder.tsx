import { NextPage } from "next";
import DadosLinks from "./components/links"
import React, { useState } from "react";
import { Conquistas, Curso, Cv, Experiencia } from "../util/models/types";
import { Container, Button , FormGroup, FormControl, Input, InputLabel, Divider} from '@material-ui/core';
import { Cursor } from "mongoose";


const Builder:NextPage = () => {
    
    interface UserLinks {
        tipoLink:String,
        link:String
    }


    
    const [dadosLinkList, setDadoslinkList] = useState<any>([]);
    const [nome, setNome] = useState<String>();
    const [localidade, setLocalidade] = useState<String>();
    const [email, setEmail] = useState<String>();
    const [titulo_palavras_chave, settitulo_palavras_chave] = useState<[String]>();
    const [links, setLinks] = useState<[String]>();
    const [cover_letter, setcover_letter] = useState<String>();
    const [habilidades, setHabilidades] = useState<[String]>();
    const [experiencia, setExperiencia] = useState<Experiencia>();
    const [cursos, setCursos] = useState<Curso>();
    const [conquistas, setConquistas] = useState<Conquistas>();



    function pushLinks(){
        console.log("Nome: " + nome)
        console.log("email: " + email)
        console.log("localidade: " + localidade)
        const dados = <DadosLinks tipolink="git" link="github.com" />;
        setDadoslinkList([dados, ...dadosLinkList])
    }

    return(
        <Container className="center">
            <h2>Construa seu CV:</h2>

            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="name">Name:</InputLabel><br />
                    <Input id="name" type="text" autoComplete="name" required onChange={(e) => {setNome(e.target.value)}}/>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="localidade">Localidade</InputLabel><br />
                    <Input id="localidade" type="text" autoComplete="localidade" required onChange={(e) => {setLocalidade(e.target.value)}}/>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel><br />
                    <Input id="email" type="text" autoComplete="email" required onChange={(e) => {setEmail(e.target.value)}}/>
                </FormControl>

                

                {dadosLinkList}
                <br />

                <Divider />

                <Button variant="contained" color="primary" onClick={pushLinks}>Register</Button>
            </FormGroup>
        </Container>
    )
}

export default Builder;
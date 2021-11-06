import { NextPage } from "next";
import DadosLinks from "./components/links"
import React, { useState } from "react";
import { Container, Button , FormGroup, FormControl, Input, InputLabel, Divider} from '@material-ui/core';


const Builder:NextPage = () => {
    
    interface UserLinks {
        tipoLink:String,
        link:String
    }


    
    const [dadosLinkList, setDadoslinkList] = useState<any>([]);


    function pushLinks(){
        const dados = <DadosLinks tipolink="git" link="github.com" />;
        setDadoslinkList([dados, ...dadosLinkList])
    }

    return(
        <Container className="center">
            <h2>Construa seu CV:</h2>

            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="name">Name:</InputLabel><br />
                    <Input id="name" type="text" autoComplete="name" required />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="name">Endereço </InputLabel><br />
                    <Input id="name" type="text" autoComplete="name" required />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="name">Ocupação</InputLabel><br />
                    <Input id="name" type="text" autoComplete="name" required />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="name">Link</InputLabel><br />
                    <Input id="name" type="text" autoComplete="name" required />
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
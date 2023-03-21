import { TextField } from "@material-ui/core";
import React, { useState } from "react";


function FormNome({ name }: { name: string; }): JSX.Element {

    
    const [nome, setNome] = useState<string>(name);
    return(

        <TextField
            className="campoFull campoComPadding"
            id="nome"
            label="nome"
            value={nome}
            type="text"
            autoComplete="nome"
            variant="outlined"
            required
            onChange={(e) => {
                setNome(e.target.value);
            }}
            />
        
        );
}
export default FormNome;

import { TextField } from "@material-ui/core";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function FormNome( data : string ): JSX.Element {
    const session: any = useSession();
    const [nome, setNome] = useState<string>(data);
    return(

        <TextField
            className="campoFull campoComPadding"
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
        
        );
}
export default FormNome;

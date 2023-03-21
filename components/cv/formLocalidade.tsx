import { TextField } from "@material-ui/core";
import React, { useState } from "react";


function FormLocalidade({ local }: { local: string; }): JSX.Element {

    
    const [localidade, setLocalidade] = useState<string>(local);
    return(

        <TextField
            className="campoFull campoComPadding"
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
        
        );
}
export default FormLocalidade;

import { NextPage } from "next";
import DadosLinks from "./components/links"
import { useState } from "react";

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
        <div>
            <h2>Construa seu CV:</h2>

            <form>
                <div className="formGroup">
                    <label htmlFor="name">Name:</label><br />
                    <input id="name" type="text" autoComplete="name" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="name">Endereço </label><br />
                    <input id="name" type="text" autoComplete="name" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="name">Ocupação</label><br />
                    <input id="name" type="text" autoComplete="name" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="name">Link</label><br />
                    <input id="name" type="text" autoComplete="name" required />
                    
                </div>

                {dadosLinkList}
                <br />

                <button onClick={pushLinks}>Register</button>
            </form>
        </div>
    )
}

export default Builder;
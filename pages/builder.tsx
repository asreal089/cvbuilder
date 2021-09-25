import { NextPage } from "next";
import DadosLinks from "./components/links"

const builder:NextPage = () => {

    
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

                <DadosLinks tipolink="git" link="github.com" />
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default builder;
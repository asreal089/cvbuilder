import { Container } from "@mui/material";
import { NextPage} from "next";

const notFound:NextPage = () => {
    return(
        <Container>
            <br />
            <h1 className="center">404</h1>
            <p> pagina não encontrada</p>        
        </Container>
    );
}

export default notFound;
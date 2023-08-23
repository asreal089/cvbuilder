import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";


interface KeyWordsFormProps {
    titulo_palavras_chave: string[];
    setTitulo_palavras_chave: (titulo_palavras_chave: string[]) => void;
    pushPalavraChave: () => void;
    setNovaPalavraChave: (e: any, index: number) => void;
}

const KeyWordsForm = (props: KeyWordsFormProps) => {

    return (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Key words
            </Typography>
            <br />
            {props.titulo_palavras_chave.map((_element, index: number) => (
              <span key={index} className="campoFull campoComPadding">
                <TextField
                  name="keyword"
                  className="palavra-chave campoFull campoComPadding"
                  type="text"
                  label="key word"
                  variant="outlined"
                  value={props.titulo_palavras_chave[index]}
                  required
                  onChange={(e) => {
                    props.setNovaPalavraChave(e, index);
                  }}
                />
              </span>
            ))}
            <span className="center campoFull campoComPadding">
              <Button
                variant="contained"
                color="primary"
                onClick={props.pushPalavraChave}
              >
                Key word <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
    )
}

export default KeyWordsForm;
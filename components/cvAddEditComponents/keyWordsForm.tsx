import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import validateFields from "../../util/validateUtils";

interface KeyWordsFormProps {
    titulo_palavras_chave: string[];
    setTitulo_palavras_chave: (titulo_palavras_chave: string[]) => void;
    pushPalavraChave: () => void;
    removePalavraChave: (index: number) => void;
    setNovaPalavraChave: (e: any, index: number) => void;
}

const KeyWordsForm = (props: KeyWordsFormProps) => {

    return (
        <div>
          <div>
            <div >
              Key words
            </div>
            <br />
            {props.titulo_palavras_chave.map((_element, index: number) => (
              <span key={index} className="campoFullFlex campoComPadding">

                <input
                  name="keyword"
                  className="palavra-chave campoInterno campoComPadding"
                  type="text"

                  //error={validateFields(props.titulo_palavras_chave[index])}
                  //helperText={validateFields(props.titulo_palavras_chave[index]) ? 'Field cannot be blank' : null}
                  value={props.titulo_palavras_chave[index]}
                  required
                  onChange={(e) => {
                    props.setNovaPalavraChave(e, index);
                  }}
                />
                <div
                color="warning"
                className="botaoRemover"
                onClick={props.removePalavraChave.bind(this, index)}
              >
                <RemoveCircleIcon className="center" ></RemoveCircleIcon>
              </div>
              </span>
            ))}
            <span className="center campoFull campoComPadding">
              <div
                color="primary"
                onClick={props.pushPalavraChave}
              >
                Key word <AddCircleIcon className="center buttonRemoveIcon"></AddCircleIcon>
              </div>
            </span>
          </div>
        </div>
    )
}

export default KeyWordsForm;
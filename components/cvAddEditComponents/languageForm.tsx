import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Lingua } from "../../util/models/types";

interface LanguageFormProps {
  linguas: Lingua[];
  setLinguas: (linguas: Lingua[]) => void;
  setNovaLinguaLingua: (e: any, index: number) => void;
  setNovaLinguaNivel: (e: any, index: number) => void;
  pushLingua: () => void;
}

const LanguageForm: React.FC<LanguageFormProps> = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Languages
        </Typography>
        {props.linguas.map((_element, index: number) => (
          <span key={index} className="linguas">
            <TextField
              name="language"
              className="lingua campoFull campoComPadding"
              type="text"
              label="language"
              variant="outlined"
              value={props.linguas[index].lingua}
              required
              onChange={(e) => {
                props.setNovaLinguaLingua(e, index);
              }}
            />

            <TextField
              name="language-level"
              className="lingua campoFull campoComPadding"
              type="text"
              label="language level"
              variant="outlined"
              value={props.linguas[index].nivel}
              required
              onChange={(e) => {
                props.setNovaLinguaNivel(e, index);
              }}
            />
          </span>
        ))}

        <span className="center campoFull campoComPadding">
          <Button
            variant="contained"
            color="primary"
            onClick={props.pushLingua}
          >
            Língua <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
      </CardContent>
    </Card>
  );
};
export default LanguageForm;

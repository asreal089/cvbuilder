import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface SkillsFormProps {
  habilidades: string[];
  setHabilidades: (habilidades: string[]) => void;
  pushHabilidade: () => void;
  removeHabilidade: (index: number) => void;
  setNovaHabilidade: (e: any, index: number) => void;
}


const SkillsForm = (props: SkillsFormProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Skills:
        </Typography>
        <br />
        {props.habilidades.map((_element, index: number) => (
          <span key={index} className="campoFullFlex campoComPadding">
            <TextField
              name="skill"
              className="campoInterno campoComPadding"
              type="text"
              label="skill"
              value={props.habilidades[index]}
              variant="outlined"
              required
              onChange={(e) => {
                props.setNovaHabilidade(e, index);
              }}
            />
            <Button
              variant="text"
              color="warning"
              className="botaoRemover"
              onClick={(e) => props.removeHabilidade(index)}
            >
              <RemoveCircleIcon className="center"></RemoveCircleIcon>
            </Button>
          </span>
        ))}

        <span className="link center campoFull campoComPadding">
          <Button variant="contained" color="primary" onClick={props.pushHabilidade}>
            Skill <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
      </CardContent>
    </Card>
  )
}

export default SkillsForm;
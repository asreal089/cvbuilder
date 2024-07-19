import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Curso } from "../../util/models/types";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";


interface EducationFormProps {
  cursos: Curso[];
  setNovoCursoInstituicao: (e: any, index: number) => void;
  setNovoCursoDuracao: (e: any, index: number) => void;
  setNovoCursoDescricao: (e: any, index: number) => void;
  setNovoCursoIsConcluded: (e: any, index: number) => void;
  setCursoFim: (e: any, index: number) => void;
  removeEducation: (index: number) => void;
  pushCurso: () => void;
}

const EducationForm = (props: EducationFormProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Education
        </Typography>
        <br />

        {props.cursos.map((_element, index: number) => {
          return (
            <span key={index} className="campoFull campoComPadding">
              <TextField
                name="Institution"
                className="cursos campoFull campoComPadding"
                type="text"
                label="Institution"
                value={props.cursos[index].instituicao}
                variant="outlined"
                required
                onChange={(e) => {
                  props.setNovoCursoInstituicao(e, index);
                }}
              />
              <TextField
                name="cursos"
                className="cursos campoFull campoComPadding"
                type="text"
                variant="outlined"
                label="Duration"
                value={props.cursos[index].duracao}
                required
                onChange={(e) => {
                  props.setNovoCursoDuracao(e, index);
                }}
              />
              <TextField
                name="cursos"
                className="cursos campoFull campoComPadding"
                type="text"
                variant="outlined"
                label="description"
                value={props.cursos[index].descricao}
                required
                onChange={(e) => {
                  props.setNovoCursoDescricao(e, index);
                }}
              />
              {props.cursos[index].is_concluded && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    className="data_picker campoFull campoComPadding"
                    label="end date"
                    inputFormat="MM/dd/yyyy"
                    value={props.cursos[index].termino}
                    onChange={(e) => {
                      props.setCursoFim(e, index);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              )}
              <FormControlLabel
                control={
                  <Switch
                    checked={props.cursos[index].is_concluded}
                    onChange={(e) => {
                      props.setNovoCursoIsConcluded(e, index);
                    }}
                    value={props.cursos[index].is_concluded}
                    name="chechIsConcluded"
                    color="primary"
                  />
                }
                label="Is concluded"
              />
              <Button
                variant="contained"
                color="warning"
                onClick={(e) => props.removeEducation(index)}
              >
                Remove Education
                <RemoveCircleIcon className="center"></RemoveCircleIcon>
              </Button>
              <br />
              <br />
            </span>
          );
        })}
        <br />
        <span className="center campoFull campoComPadding">
          <Button variant="contained" color="primary" onClick={props.pushCurso}>
            Course <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
      </CardContent>
    </Card>
  );
};
export default EducationForm;

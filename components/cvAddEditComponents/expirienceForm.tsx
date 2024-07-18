import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Experiencia } from "../../util/models/types";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface ExpirienceFormProps {
  experiencias: Experiencia[];
  setNovaExperienciaTitulo: (e: any, index: number) => void;
  setNovaExperienciaEmpresa: (e: any, index: number) => void;
  setNovaExperienciaDescricao: (e: any, index: number) => void;
  setNovaExperienciaInicio: (e: any, index: number) => void;
  setNovaExperienciaIsCurrent: (e: any, index: number) => void;
  setExperienciaFim: (e: any, index: number) => void;
  pushExperiencia: () => void;
  removeExperiencia: (index: number) => void;
}

export default function Experience(props: ExpirienceFormProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Experiences
        </Typography>
        <br />
        {props.experiencias.map((_element: any, index: number) => {
          return (
            <span key={index} className="campoFull campoComPadding">
              <TextField
                name="experience-title"
                className="experiencia-empresa campoFull campoComPadding"
                type="text"
                label="Title"
                value={props.experiencias[index].titulo}
                variant="outlined"
                required
                onChange={(e) => {
                  props.setNovaExperienciaTitulo(e, index);
                }}
              />
              <TextField
                name="experience-company"
                className="experiencia-empresa campoFull campoComPadding"
                type="text"
                label="Company"
                value={props.experiencias[index].empresa}
                variant="outlined"
                required
                onChange={(e) => {
                  props.setNovaExperienciaEmpresa(e, index);
                }}
              />

              <TextField
                name="experience-description"
                className="experiencia campoFull campoComPadding"
                type="text"
                minRows={5}
                variant="outlined"
                multiline
                label="Description"
                value={props.experiencias[index].descricao}
                required
                onChange={(e) => {
                  props.setNovaExperienciaDescricao(e, index);
                }}
              />
              <span className="campoFull campoComPadding">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    className="data_picker campoFull campoComPadding"
                    label="begin date"
                    inputFormat="MM/dd/yyyy"
                    value={props.experiencias[index].incio}
                    onChange={(e) => {
                      props.setNovaExperienciaInicio(e, index);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                </LocalizationProvider>



                {!props.experiencias[index].is_current && (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      className="data_picker campoFull campoComPadding"
                      label="end date"
                      inputFormat="MM/dd/yyyy"
                      value={props.experiencias[index].fim}
                      onChange={(e) => {
                        props.setExperienciaFim(e, index);
                      }}
                      renderInput={(params: any) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                )}

                <span className="center campoFull campoComPadding">
                <FormControlLabel
                  control={
                    <Switch
                      checked={props.experiencias[index].is_current}
                      onChange={(e) => {
                        props.setNovaExperienciaIsCurrent(e, index);
                      }}
                      value={props.experiencias[index].is_current}
                      name="chechIsCurrent"
                      color="primary"
                    />
                  }
                  label="Is Current"
                />
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={(e) => props.removeExperiencia(index)}
                  >
                    Remove Experience
                    <RemoveCircleIcon className="center"></RemoveCircleIcon>
                  </Button>
                </span>
                <br />
                <br />
              </span>

            </span>
          );
        })}
        <br />

        <span className="center campoFull campoComPadding">
          <Button
            variant="contained"
            color="primary"
            onClick={props.pushExperiencia}
          >
            Experiences <AddCircleIcon className="center"></AddCircleIcon>
          </Button>
        </span>
      </CardContent>
    </Card>
  );
}

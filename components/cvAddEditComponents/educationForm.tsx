
import { Curso } from "../../util/models/types";

import AddCircleIcon from "@mui/icons-material/AddCircle";

interface EducationFormProps {
  cursos: Curso[];
  setNovoCursoInstituicao: (e: any, index: number) => void;
  setNovoCursoDuracao: (e: any, index: number) => void;
  setNovoCursoDescricao: (e: any, index: number) => void;
  setNovoCursoIsConcluded: (e: any, index: number) => void;
  setCursoFim: (e: any, index: number) => void;
  pushCurso: () => void;
}

const EducationForm = (props: EducationFormProps) => {
  return (
    <div>
      <div>
        <div >
          Education
        </div>
        <br />

        {props.cursos.map((_element, index: number) => {
          return (
            <span key={index} className="campoFull campoComPadding">
              <input
                name="Institution"
                className="cursos campoFull campoComPadding"
                type="text"
                
                value={props.cursos[index].instituicao}
                required
                onChange={(e) => {
                  props.setNovoCursoInstituicao(e, index);
                }}
              />
              <input
                name="cursos"
                className="cursos campoFull campoComPadding"
                type="text"
                value={props.cursos[index].duracao}
                required
                onChange={(e) => {
                  props.setNovoCursoDuracao(e, index);
                }}
              />
              <input
                name="cursos"
                className="cursos campoFull campoComPadding"
                type="text"
                value={props.cursos[index].descricao}
                required
                onChange={(e) => {
                  props.setNovoCursoDescricao(e, index);
                }}
              />
              <input
                // control={
                //   <Switch
                //     checked={props.cursos[index].is_concluded}
                //     onChange={(e) => {
                //       props.setNovoCursoIsConcluded(e, index);
                //     }}
                //     value={props.cursos[index].is_concluded}
                //     name="chechIsConcluded"
                //     color="primary"
                //   />
                // }
                // label="Is concluded"
              />
              {props.cursos[index].is_concluded && (
                <div>
                  {/* <DesktopDatePicker
                    className="data_picker campoFull campoComPadding"
                    label="end date"
                    inputFormat="MM/dd/yyyy"
                    value={props.cursos[index].termino}
                    onChange={(e) => {
                      props.setCursoFim(e, index);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                  /> */}
                </div>
              )}
            </span>
          );
        })}
        <br />
        <span className="center campoFull campoComPadding">
          <div color="primary" onClick={props.pushCurso}>
            Course <AddCircleIcon className="center"></AddCircleIcon>
          </div>
        </span>
      </div>
    </div>
  );
};
export default EducationForm;

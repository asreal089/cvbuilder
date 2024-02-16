
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Experiencia } from "../../util/models/types";


interface ExpirienceFormProps {
  experiencias: Experiencia[];
  setNovaExperienciaTitulo: (e: any, index: number) => void;
  setNovaExperienciaEmpresa: (e: any, index: number) => void;
  setNovaExperienciaDescricao: (e: any, index: number) => void;
  setNovaExperienciaInicio: (e: any, index: number) => void;
  setNovaExperienciaIsCurrent: (e: any, index: number) => void;
  setExperienciaFim: (e: any, index: number) => void;
  pushExperiencia: () => void;
}

export default function Experience(props: ExpirienceFormProps) {
  return (
    <div>
      <div>
        <div >
          Experiences
        </div>
        <br />
        {props.experiencias.map((_element: any, index: number) => {
          return (
            <span key={index} className="campoFull campoComPadding">
              <input
                name="experience-title"
                className="experiencia-empresa campoFull campoComPadding"
                type="text"
                value={props.experiencias[index].titulo}
                required
                onChange={(e) => {
                  props.setNovaExperienciaTitulo(e, index);
                }}
              />
              <input
                name="experience-company"
                className="experiencia-empresa campoFull campoComPadding"
                type="text"
                value={props.experiencias[index].empresa}
                required
                onChange={(e) => {
                  props.setNovaExperienciaEmpresa(e, index);
                }}
              />

              <input
                name="experience-description"
                className="experiencia campoFull campoComPadding"
                type="text"

                value={props.experiencias[index].descricao}
                required
                onChange={(e) => {
                  props.setNovaExperienciaDescricao(e, index);
                }}
              />
              <span className="campoFull campoComPadding">
                <div >
                  <div
                    // className="data_picker campoFull campoComPadding"
                    // label="begin date"
                    // inputFormat="MM/dd/yyyy"
                    // value={props.experiencias[index].incio}
                    // onChange={(e) => {
                    //   props.setNovaExperienciaInicio(e, index);
                    // }}
                    // renderInput={(params: any) => <TextField {...params} />}
                  />
                </div>

                <input
                  // control={
                  //   <Switch
                  //     checked={props.experiencias[index].is_current}
                  //     onChange={(e) => {
                  //       props.setNovaExperienciaIsCurrent(e, index);
                  //     }}
                  //     value={props.experiencias[index].is_current}
                  //     name="chechIsCurrent"
                  //     color="primary"
                  //   />
                  // }
                  // label="Is Current"
                />
                {!props.experiencias[index].is_current && (
                  <div>
                    <input
                      // className="data_picker campoFull campoComPadding"
                      // label="end date"
                      // inputFormat="MM/dd/yyyy"
                      // value={props.experiencias[index].fim}
                      // onChange={(e) => {
                      //   props.setExperienciaFim(e, index);
                      // }}
                      // renderInput={(params: any) => <TextField {...params} />}
                    />
                  </div>
                )}
              </span>
            </span>
          );
        })}
        <br />

        <span className="center campoFull campoComPadding">
          <div
            color="primary"
            onClick={props.pushExperiencia}
          >
            Experiences <AddCircleIcon className="center"></AddCircleIcon>
          </div>
        </span>
      </div>
    </div>
  );
}

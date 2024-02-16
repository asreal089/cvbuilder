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
    <div>
      <div>
        <div >
          Languages
        </div>
        {props.linguas.map((_element, index: number) => (
          <span key={index} className="linguas">
            <input
              name="language"
              className="lingua campoFull campoComPadding"
              type="text"
              value={props.linguas[index].lingua}
              required
              onChange={(e) => {
                props.setNovaLinguaLingua(e, index);
              }}
            />

            <input
              name="language-level"
              className="lingua campoFull campoComPadding"
              type="text"
              value={props.linguas[index].nivel}
              required
              onChange={(e) => {
                props.setNovaLinguaNivel(e, index);
              }}
            />
          </span>
        ))}

        <span className="center campoFull campoComPadding">
          <div
            color="primary"
            onClick={props.pushLingua}
          >
            Língua <AddCircleIcon className="center"></AddCircleIcon>
          </div>
        </span>
      </div>
    </div>
  );
};
export default LanguageForm;

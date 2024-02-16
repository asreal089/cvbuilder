import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Links } from "../../util/models/types";


interface LinkFormProps {
    links: Links[];
    pushLink: () => void;
    setNovoLinkTipo: (e: any, index: number) => void;
    setNovoLinkLink: (e: any, index: number) => void;
}


const LinkForm = (props: LinkFormProps) => {

    return (

        <div>
          <div>
            <div>
              Links
            </div>
            <br />
            {props.links.map((_element, index: number) => (
              <span key={index} className="links">
                <input
                  name="link-desc"
                  className="link campoFull campoComPadding"
                  type="text"
                  value={props.links[index].tipo}
                  required
                  onChange={(e) => {
                    props.setNovoLinkTipo(e, index);
                  }}
                />

                <input
                  name="link-link"
                  className="link campoFull campoComPadding"
                  type="text"
                  value={props.links[index].link}
                  required
                  onChange={(e) => {
                    props.setNovoLinkLink(e, index);
                  }}
                />
              </span>
            ))}
            <span className="center campoFull campoComPadding">
              <div color="primary" onClick={props.pushLink}>
                Link <AddCircleIcon className="center"></AddCircleIcon>
              </div>
            </span>
          </div>
        </div>

    )
}

export default LinkForm;
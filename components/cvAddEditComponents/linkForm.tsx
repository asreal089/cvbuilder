import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Links } from "../../util/models/types";


interface LinkFormProps {
    links: Links[];
    pushLink: () => void;
    setNovoLinkTipo: (e: any, index: number) => void;
    setNovoLinkLink: (e: any, index: number) => void;
    removeLink: (index: number) => void;
}


const LinkForm = (props: LinkFormProps) => {

    return (

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Links
            </Typography>
            <br />
            {props.links.map((_element, index: number) => (
              <span key={index} className="links">
                <TextField
                  name="link-desc"
                  className="link campoFull campoComPadding"
                  type="text"
                  label="Link description"
                  variant="outlined"
                  value={props.links[index].tipo}
                  required
                  onChange={(e) => {
                    props.setNovoLinkTipo(e, index);
                  }}
                />

                <TextField
                  name="link-link"
                  className="link campoFull campoComPadding"
                  type="text"
                  label="link"
                  variant="outlined"
                  value={props.links[index].link}
                  required
                  onChange={(e) => {
                    props.setNovoLinkLink(e, index);
                  }}
                />
                <span className="center campoFull campoComPadding">
                <Button
                    variant="contained"
                    color="warning"
                    onClick={props.removeLink.bind(this, index)}
                  >
                    Remove Link
                    <RemoveCircleIcon className="center"></RemoveCircleIcon>
                  </Button>
                  <br /><br />
                </span>
              </span>
            ))}
            <span className="center campoFull campoComPadding">
              <Button variant="contained" color="primary" onClick={props.pushLink}>
                Link <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>

    )
}

export default LinkForm;
import { Card, CardContent, TextField, Typography } from "@mui/material";

interface PersonalDataFormProps {
    nome: string;
    localidade: string;
    phone_whatsapp: string;
    email: string;
    setNome: (nome: string) => void;
    setLocalidade: (localidade: string) => void;
    setPhone_whatsapp: (phone_whatsapp: string) => void;
    setEmail: (email: string) => void;
}

const PersonalDataForm : React.FC<PersonalDataFormProps> = (props) => {
    return(

    <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Personal Data
            </Typography>
            <br />
            <TextField
              className="campoFull campoComPadding"
              id="name"
              label="name"
              value={props.nome}
              type="text"
              autoComplete="name"
              variant="outlined"
              required
              onChange={(e) => {
                props.setNome(e.target.value);
              }}
            />

            <TextField
              className="campoFull campoComPadding"
              id="location"
              label="location"
              type="text"
              variant="outlined"
              value={props.localidade}
              autoComplete="location"
              required
              onChange={(e) => {
                props.setLocalidade(e.target.value);
              }}
            />

            <TextField
              className="campoFull campoComPadding"
              id="phone_whatsapp"
              label="phone/whatsapp"
              type="text"
              value={props.phone_whatsapp}
              variant="outlined"
              autoComplete="email"
              required
              onChange={(e) => {
                props.setPhone_whatsapp(e.target.value);
              }}
            />

            <TextField
              className="campoFull campoComPadding"
              id="email"
              label="email"
              type="text"
              value={props.email}
              variant="outlined"
              autoComplete="email"
              required
              onChange={(e) => {
                props.setEmail(e.target.value);
              }}
            />
          </CardContent>
        </Card>
    )
}

export default PersonalDataForm;
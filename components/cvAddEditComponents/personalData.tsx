import validateFields from "../../util/validateUtils";

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

  function validateEmail(email: string) {
    if(validateFields(email)) return true;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email) === false;
  }

  
  
  return(

    <div>
          <div>
            <div>
              Personal Data
            </div>
            <br />
            <input
              className="campoFull campoComPadding"
              id="name"
              value={props.nome}
              type="text"
              autoComplete="name"
              //error={validateFields(props.nome)}
              //helperText={validateFields(props.nome) ? 'this field is required' : null}
              required
              onChange={(e) => {
                props.setNome(e.target.value);
              }}
            />

            <input
              className="campoFull campoComPadding"
              id="location"
              type="text"
              value={props.localidade}
              autoComplete="location"
              //error={validateFields(props.localidade)}
              //helperText={validateFields(props.localidade) ? 'this field is required' : null}
              required
              onChange={(e) => {
                props.setLocalidade(e.target.value);
              }}
            />

            <input
              className="campoFull campoComPadding"
              id="phone_whatsapp"
              type="text"
              value={props.phone_whatsapp}
              autoComplete="phone_whatsapp"
              required
              // error={validateFields(props.phone_whatsapp)}
              // helperText={ validateFields(props.phone_whatsapp) ? 'this field is required' : null}
              onChange={(e) => {
                props.setPhone_whatsapp(e.target.value);
              }}
            />

            <input
              className="campoFull campoComPadding"
              id="email"
              type="text"
              value={props.email}
              autoComplete="email"
              required
              // error={validateEmail(props.email)}
              // helperText={validateEmail(props.email) ? 'this field is required, insert a valid email' : null}
              onChange={(e) => {
                props.setEmail(e.target.value);
              }}
            />
          </div>
        </div>
    )
}

export default PersonalDataForm;
import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  Conquistas,
  Curso,
  Experiencia,
  Cv,
  Links,
  Lingua,
} from "../util/models/types";
import {
  Card,
  Button,
  FormGroup,
  Divider,
  TextField,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Alert, AlertTitle } from "@mui/material";
import { useSession } from "next-auth/react";
import styles from "../styles/CvForm.module.css";
import PrivacyModal from "./privacyTermsModal";
import DeleteCvModal from "./deleteCvModal";
import PersonalDataForm from "./cvAddEditComponents/personalData";
import LanguageForm from "./cvAddEditComponents/languageForm";
import KeyWordsForm from "./cvAddEditComponents/keyWordsForm";
import LinkForm from "./cvAddEditComponents/linkForm";
import EducationForm from "./cvAddEditComponents/educationForm";
import ExpirienceForm from "./cvAddEditComponents/expirienceForm";

interface Data {
  data: Cv;
}

function CvAddEdit({ data }: Data): JSX.Element {
  const session: any = useSession();
  const router = useRouter();
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [saveSucefull, setSaveSucefull] = useState<boolean>(false);
  const [nome, setNome] = useState<string>(data?.nome || "");
  const [localidade, setLocalidade] = useState<string>(data?.localidade || "");
  const [email, setEmail] = useState<string>(data?.email || "");
  const [phone_whatsapp, setPhone_whatsapp] = useState<string>(
    data?.phone_whatsapp || ""
  );
  const [titulo_palavras_chave, setTitulo_palavras_chave] = useState<string[]>(
    data?.titulo_palavras_chave || []
  );
  const [linguas, setLinguas] = useState<Lingua[]>(data?.linguas || []);
  const [links, setLinks] = useState<Links[]>(data?.links || []);
  const [cover_letter, setCover_letter] = useState<string>(
    data?.cover_letter || ""
  );
  const [habilidades, setHabilidades] = useState<string[]>(
    data?.habilidades || []
  );
  const [experiencia, setExperiencia] = useState<Experiencia[]>(
    data?.experiencia || []
  );
  const [cursos, setCursos] = useState<Curso[]>(data?.cursos || []);
  const [conquistas, setConquistas] = useState<Conquistas[]>(
    data?.conquistas || []
  );

  async function deleteCV() {
    await fetch("/api/cv/" + data._id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function saveCV() {
    let cv = buildCV();
    if (data && data._id) {
      await fetch("/api/cv/" + data._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cv),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await fetch("/api/cv", {
        body: JSON.stringify(cv),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    togglePrivacyModal();
    setSaveSucefull(true);
  }

  function buildCV() {
    let cv: Cv = {
      id_usuario: session.data.user.email,
      img_url: session.data.user.image,
      nome: nome,
      localidade: localidade,
      email: email,
      phone_whatsapp: phone_whatsapp,
      titulo_palavras_chave: titulo_palavras_chave,
      links: links,
      linguas: linguas,
      cover_letter: cover_letter,
      habilidades: habilidades,
      experiencia: experiencia,
      cursos: cursos,
      conquistas: conquistas,
    };

    return cv;
  }
  function pushHabilidade() {
    setHabilidades([...habilidades, ""]);
  }

  function setNovaHabilidade(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = habilidades.map((i: any) => i);
    temp[index] = e.target.value;
    setHabilidades(temp);
  }

  function pushPalavraChave() {
    setTitulo_palavras_chave([...titulo_palavras_chave, ""]);
  }

  function removePalavraChave(index: number) {
    let temp = titulo_palavras_chave.map((i: any) => i);
    temp.splice(index, 1);
    setTitulo_palavras_chave(temp);
  }




  function pushLink() {
    setLinks([...links, { tipo: "", link: "" }]);
  }

  function pushLingua() {
    setLinguas([...linguas, { lingua: "", nivel: "" }]);
  }

  function setNovaPalavraChave(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = titulo_palavras_chave.map((i: any) => i);
    temp[index] = e.target.value;
    setTitulo_palavras_chave(temp);
  }

  function setNovaLinguaLingua(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = linguas.map((i: Lingua) => i);
    temp[index].lingua = e.target.value;
    setLinguas(temp);
  }

  function setNovaLinguaNivel(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = linguas.map((i: Lingua) => i);
    temp[index].nivel = e.target.value;
    setLinguas(temp);
  }

  function setNovoLinkTipo(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = links.map((i: Links) => i);
    temp[index].tipo = e.target.value;
    setLinks(temp);
  }

  function setNovoLinkLink(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = links.map((i: Links) => i);
    temp[index].link = e.target.value;
    setLinks(temp);
  }

  function removeExperiencia(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) {
    let temp = experiencia.map((i: any) => i);
    temp.splice(index, 1);
    setExperiencia(temp);
  }

  function setNovaExperienciaDescricao(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].descricao = e.target.value;
    setExperiencia(temp);
  }

  function setNovaExperienciaIsCurrent(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);

    console.log(e.target.value);
    temp[index].is_current = !temp[index].is_current;
    if (temp[index].is_current) {
      temp[index].fim = "";
    }
    setExperiencia(temp);
  }

  function pushExperiencia() {
    setExperiencia([
      ...experiencia,
      {
        titulo: "",
        descricao: "",
        empresa: "",
        incio: "",
        fim: "",
        is_current: false,
      },
    ]);
  }

  function setNovaExperienciaEmpresa(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].empresa = e.target.value;
    setExperiencia(temp);
  }

  function setNovaExperienciaTitulo(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].titulo = e.target.value;
    setExperiencia(temp);
  }

  function setNovaExperienciaInicio(e: any, index: number) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].incio = e;
    setExperiencia(temp);
  }

  function setExperienciaFim(e: any, index: number) {
    let temp = experiencia.map((i: Experiencia) => i);
    temp[index].fim = e;
    setExperiencia(temp);
  }

  function pushCurso() {
    setCursos([
      ...cursos,
      {
        instituicao: "",
        duracao: "",
        descricao: "",
        is_concluded: false,
        termino: "",
      },
    ]);
  }

  function setNovoCursoDescricao(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = cursos.map((i: Curso) => i);
    temp[index].descricao = e.target.value;
    setCursos(temp);
  }

  function setNovoCursoDuracao(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = cursos.map((i: Curso) => i);
    temp[index].duracao = e.target.value;
    setCursos(temp);
  }

  function setNovoCursoInstituicao(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = cursos.map((i: Curso) => i);
    temp[index].instituicao = e.target.value;
    setCursos(temp);
  }

  function setNovoCursoIsConcluded(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) {
    let temp = cursos.map((i: Curso) => i);

    temp[index].is_concluded = !temp[index].is_concluded;
    if (temp[index].is_concluded) {
      temp[index].termino = "";
    }
    setCursos(temp);
  }

  function setCursoFim(e: any, index: number) {
    let temp = cursos.map((i: Curso) => i);
    temp[index].termino = e;
    setCursos(temp);
  }

  function togglePrivacyModal() {
    setShowPrivacyModal(!showPrivacyModal);
  }

  function toggleDeleteModal() {
    setShowDeleteModal(!showDeleteModal);
  }

  return (
    <div className={styles.formContainer}>
      <FormGroup className={styles.formItems}>
        <PersonalDataForm
          nome={nome}
          localidade={localidade}
          phone_whatsapp={phone_whatsapp}
          email={email}
          setNome={setNome}
          setLocalidade={setLocalidade}
          setPhone_whatsapp={setPhone_whatsapp}
          setEmail={setEmail}
        />
        <br />

        <KeyWordsForm
          titulo_palavras_chave={titulo_palavras_chave}
          setTitulo_palavras_chave={setTitulo_palavras_chave}
          pushPalavraChave={pushPalavraChave}
          setNovaPalavraChave={setNovaPalavraChave} 
          removePalavraChave={removePalavraChave}        />
        <br />

        <LanguageForm
          linguas={linguas}
          setLinguas={setLinguas}
          setNovaLinguaLingua={setNovaLinguaLingua}
          setNovaLinguaNivel={setNovaLinguaNivel}
          pushLingua={pushLingua}
        />

        <br />
        <LinkForm
          links={links}
          pushLink={pushLink}
          setNovoLinkTipo={setNovoLinkTipo}
          setNovoLinkLink={setNovoLinkLink}
        />
        <br />

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Cover Letter
            </Typography>
            <br />

            <TextField
              id="cover-letter"
              className="campoFull campoComPadding"
              label="Cover Later"
              type="text"
              value={cover_letter}
              variant="outlined"
              autoComplete="cover-letter"
              minRows={5}
              multiline
              required
              onChange={(e) => {
                setCover_letter(e.target.value);
              }}
            />
          </CardContent>
        </Card>
        <br />
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Skills:
            </Typography>
            <br />

            {habilidades.map((_element, index: number) => (
              <span key={index} className="campoFull campoComPadding">
                <TextField
                  name="skill"
                  className="habilidade campoFull campoComPadding"
                  type="text"
                  label="skill"
                  value={habilidades[index]}
                  variant="outlined"
                  required
                  onChange={(e) => {
                    setNovaHabilidade(e, index);
                  }}
                />
              </span>
            ))}

            <span className="center campoFull campoComPadding">
              <Button
                variant="contained"
                color="primary"
                onClick={pushHabilidade}
              >
                Skill <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
        <br />
        <ExpirienceForm 
        experiencias={experiencia} 
        setNovaExperienciaTitulo={setNovaExperienciaTitulo}
        setNovaExperienciaEmpresa={setNovaExperienciaEmpresa}
        setNovaExperienciaDescricao={setNovaExperienciaDescricao} 
        setNovaExperienciaInicio={setNovaExperienciaInicio}
        setNovaExperienciaIsCurrent={setNovaExperienciaIsCurrent} 
        setExperienciaFim={setExperienciaFim}
        pushExperiencia={pushExperiencia}
        removeExperiencia={removeExperiencia} />
        <br />

        <Divider />
        <EducationForm
          cursos={cursos}
          setNovoCursoInstituicao={setNovoCursoInstituicao}
          setNovoCursoDuracao={setNovoCursoDuracao}
          setNovoCursoDescricao={setNovoCursoDescricao}
          setNovoCursoIsConcluded={setNovoCursoIsConcluded}
          setCursoFim={setCursoFim}
          pushCurso={pushCurso}
        />
        <br />
        <br />
        <span className="register">
          <Button
            variant="contained"
            color="primary"
            onClick={togglePrivacyModal}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleDeleteModal}
          >
            Delete your CV
          </Button>
        </span>
      </FormGroup>
      <br />
      <PrivacyModal
        show={showPrivacyModal}
        onClose={togglePrivacyModal}
        onSubmit={saveCV}
      />
      <DeleteCvModal
        show={showDeleteModal}
        onClose={toggleDeleteModal}
        onDelete={deleteCV}
      />
      {saveSucefull && (
        <>
          <Alert
            severity="success"
            onClose={() => {
              setSaveSucefull(false);
            }}
          >
            <AlertTitle>Success!</AlertTitle>Your CV has been registered.
          </Alert>
          <br />
        </>
      )}
    </div>
  );
}

export default CvAddEdit;

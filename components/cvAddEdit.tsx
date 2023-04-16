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
} from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Alert, AlertTitle } from "@mui/material";
import { useSession } from "next-auth/react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import styles from "../styles/CvForm.module.css";
import PrivacyModal from "./privacyTermsModal";
import DeleteCvModal from "./deleteCvModal";

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
    console.log(e);
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
    console.log(e);
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
              value={nome}
              type="text"
              autoComplete="name"
              variant="outlined"
              required
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />

            <TextField
              className="campoFull campoComPadding"
              id="location"
              label="location"
              type="text"
              variant="outlined"
              value={localidade}
              autoComplete="location"
              required
              onChange={(e) => {
                setLocalidade(e.target.value);
              }}
            />

            <TextField
              className="campoFull campoComPadding"
              id="phone_whatsapp"
              label="phone/whatsapp"
              type="text"
              value={phone_whatsapp}
              variant="outlined"
              autoComplete="email"
              required
              onChange={(e) => {
                setPhone_whatsapp(e.target.value);
              }}
            />

            <TextField
              className="campoFull campoComPadding"
              id="email"
              label="email"
              type="text"
              value={email}
              variant="outlined"
              autoComplete="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </CardContent>
        </Card>
        <br />

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Key words
            </Typography>
            <br />
            {titulo_palavras_chave.map((_element, index: number) => (
              <span key={index} className="campoFull campoComPadding">
                <TextField
                  name="keyword"
                  className="palavra-chave campoFull campoComPadding"
                  type="text"
                  label="key word"
                  variant="outlined"
                  value={titulo_palavras_chave[index]}
                  required
                  onChange={(e) => {
                    setNovaPalavraChave(e, index);
                  }}
                />
              </span>
            ))}
            <span className="center campoFull campoComPadding">
              <Button
                variant="contained"
                color="primary"
                onClick={pushPalavraChave}
              >
                Key word <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
        <br />

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Languages
            </Typography>
            {linguas.map((_element, index: number) => (
              <span key={index} className="linguas">
                <TextField
                  name="language"
                  className="lingua campoFull campoComPadding"
                  type="text"
                  label="language"
                  variant="outlined"
                  value={linguas[index].lingua}
                  required
                  onChange={(e) => {
                    setNovaLinguaLingua(e, index);
                  }}
                />

                <TextField
                  name="language-level"
                  className="lingua campoFull campoComPadding"
                  type="text"
                  label="language level"
                  variant="outlined"
                  value={linguas[index].nivel}
                  required
                  onChange={(e) => {
                    setNovaLinguaNivel(e, index);
                  }}
                />
              </span>
            ))}

            <span className="center campoFull campoComPadding">
              <Button variant="contained" color="primary" onClick={pushLingua}>
                Língua <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
        <br />

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Links
            </Typography>
            <br />
            {links.map((_element, index: number) => (
              <span key={index} className="links">
                <TextField
                  name="link-desc"
                  className="link campoFull campoComPadding"
                  type="text"
                  label="Link description"
                  variant="outlined"
                  value={links[index].tipo}
                  required
                  onChange={(e) => {
                    setNovoLinkTipo(e, index);
                  }}
                />

                <TextField
                  name="link-link"
                  className="link campoFull campoComPadding"
                  type="text"
                  label="link"
                  variant="outlined"
                  value={links[index].link}
                  required
                  onChange={(e) => {
                    setNovoLinkLink(e, index);
                  }}
                />
              </span>
            ))}
            <span className="center campoFull campoComPadding">
              <Button variant="contained" color="primary" onClick={pushLink}>
                Link <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
        <br />

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Covver Letter
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
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Experiences
            </Typography>
            <br />
            {experiencia.map((_element, index: number) => {
              return (
                <span key={index} className="campoFull campoComPadding">
                  <TextField
                    name="experience-title"
                    className="experiencia-empresa campoFull campoComPadding"
                    type="text"
                    label="Title"
                    value={experiencia[index].titulo}
                    variant="outlined"
                    required
                    onChange={(e) => {
                      setNovaExperienciaTitulo(e, index);
                    }}
                  />
                  <TextField
                    name="experience-company"
                    className="experiencia-empresa campoFull campoComPadding"
                    type="text"
                    label="Company"
                    value={experiencia[index].empresa}
                    variant="outlined"
                    required
                    onChange={(e) => {
                      setNovaExperienciaEmpresa(e, index);
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
                    value={experiencia[index].descricao}
                    required
                    onChange={(e) => {
                      setNovaExperienciaDescricao(e, index);
                    }}
                  />
                  <span className="campoFull campoComPadding">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        className="data_picker campoFull campoComPadding"
                        label="begin date"
                        inputFormat="MM/dd/yyyy"
                        value={experiencia[index].incio}
                        onChange={(e) => {
                          setNovaExperienciaInicio(e, index);
                        }}
                        renderInput={(params: any) => <TextField {...params} />}
                      />
                    </LocalizationProvider>

                    <FormControlLabel
                      control={
                        <Switch
                          checked={experiencia[index].is_current}
                          onChange={(e) => {
                            setNovaExperienciaIsCurrent(e, index);
                          }}
                          value={experiencia[index].is_current}
                          name="chechIsCurrent"
                          color="primary"
                        />
                      }
                      label="Is Current"
                    />
                    {!experiencia[index].is_current && (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          className="data_picker campoFull campoComPadding"
                          label="end date"
                          inputFormat="MM/dd/yyyy"
                          value={experiencia[index].fim}
                          onChange={(e) => {
                            setExperienciaFim(e, index);
                          }}
                          renderInput={(params: any) => (
                            <TextField {...params} />
                          )}
                        />
                      </LocalizationProvider>
                    )}
                  </span>
                </span>
              );
            })}
            <br />

            <span className="center campoFull campoComPadding">
              <Button
                variant="contained"
                color="primary"
                onClick={pushExperiencia}
              >
                Experiences <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
        <br />

        <Divider />
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Education
            </Typography>
            <br />

            {cursos.map((_element, index: number) => {
              return (
                <span key={index} className="campoFull campoComPadding">
                  <TextField
                    name="Institution"
                    className="cursos campoFull campoComPadding"
                    type="text"
                    label="Institution"
                    value={cursos[index].instituicao}
                    variant="outlined"
                    required
                    onChange={(e) => {
                      setNovoCursoInstituicao(e, index);
                    }}
                  />
                  <TextField
                    name="cursos"
                    className="cursos campoFull campoComPadding"
                    type="text"
                    variant="outlined"
                    label="Duration"
                    value={cursos[index].duracao}
                    required
                    onChange={(e) => {
                      setNovoCursoDuracao(e, index);
                    }}
                  />
                  <TextField
                    name="cursos"
                    className="cursos campoFull campoComPadding"
                    type="text"
                    variant="outlined"
                    label="description"
                    value={cursos[index].descricao}
                    required
                    onChange={(e) => {
                      setNovoCursoDescricao(e, index);
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={cursos[index].is_concluded}
                        onChange={(e) => {
                          setNovoCursoIsConcluded(e, index);
                        }}
                        value={cursos[index].is_concluded}
                        name="chechIsConcluded"
                        color="primary"
                      />
                    }
                    label="Is concluded"
                  />
                  {cursos[index].is_concluded && (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        className="data_picker campoFull campoComPadding"
                        label="end date"
                        inputFormat="MM/dd/yyyy"
                        value={cursos[index].termino}
                        onChange={(e) => {
                          setCursoFim(e, index);
                        }}
                        renderInput={(params: any) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  )}
                </span>
              );
            })}
            <br />
            <span className="center campoFull campoComPadding">
              <Button variant="contained" color="primary" onClick={pushCurso}>
                Course <AddCircleIcon className="center"></AddCircleIcon>
              </Button>
            </span>
          </CardContent>
        </Card>
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

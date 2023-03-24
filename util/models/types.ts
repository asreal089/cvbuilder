export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export interface Cv {
  _id?: string;
  id_usuario: string;
  nome: string;
  titulo_palavras_chave: string[];
  localidade: string;
  email: string;
  links: Links[];
  linguas: Lingua[];
  cover_letter: string;
  habilidades: string[];
  experiencia: Experiencia[];
  cursos: Curso[];
  conquistas: Conquistas[];
}

export interface Links {
  tipo: string;
  link: string;
}

export interface Lingua {
  lingua: string;
  nivel: string;
}

export interface Experiencia {
  titulo: string;
  empresa: string;
  incio: string;
  fim: string;
  descricao: string;
}

export interface Curso {
  instituicao: string;
  duracao: string;
  descricao: string;
}

export interface Conquistas {
  titulo: string;
  descricao: string;
}

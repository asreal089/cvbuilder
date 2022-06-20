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
  titulo_palavras_chave: [string];
  localidade: string;
  email: string;
  links: [string];
  cover_letter: string;
  habilidades: [string];
  experiencia: [Experiencia];
  cursos: [Curso];
  conquistas: [Conquistas];
}

export interface Experiencia {
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

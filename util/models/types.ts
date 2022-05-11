export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  // Interface to define our Todo model on the frontend
  export interface Cv {
    _id?: number
    nome: string
    localidade: string
    email: string
    links: string[]
    cover_letter: string
    habilidades: string[]
    experiencia: Experiencia[]
    cursos: Curso[]
    conquistas: Conquistas[]
    
  }

  export interface Experiencia { 
    empresa: string
    incio: string
    fim: string
    descricao: string
   
  }
  
  export interface Curso {
    instituicao: string
    duracao: string
    descricao: string   

  }

  export interface Conquistas{
    titulo: string
    descricao: string

  }
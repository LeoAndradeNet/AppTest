export class Utente {
    numeroProcesso: string;
    registadoEm: Date;
    ultimaAtualizacao: Date;
    tipoIdentificacao: string;
    numeroDocumento: number;
    numeroContribuinte: number;
    nome: string;
    genero: string;
    dataNascimento: Date;
    distrito: string;
    nacionalidade: string[];
    paisOrigem: string;
    estadoCivil: string;
    profissao: string;
    situacaoProfissionalAtiva: boolean;
    habilitacao: string;
    dataObito?: Date;
}
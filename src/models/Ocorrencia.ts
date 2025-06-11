import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";

export interface Ocorrencia{
    aluno: Aluno;
    disciplina:Disciplina;
    nomeProfessor:string;
    motivo: string;
    data: Date;
}
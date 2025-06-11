import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { Ocorrencia } from "./Ocorrencia";

export class Professor {

     matricula: number;
     nome: string;
     email: string;
     disciplina: string;
     telefone: string;

    constructor(matricula: number, nome: string, email: string, disciplina: string, telefone: string) {

        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
        this.disciplina = disciplina;
        this.telefone = telefone;

    }

    aplicarOcorrencia(aluno: Aluno, disciplina:Disciplina, nomeProfessor:string, motivo:string): Ocorrencia{

        return{
            aluno,
            disciplina,
            nomeProfessor:this.nome,
            motivo,
            data: new Date()
        }

    }

}
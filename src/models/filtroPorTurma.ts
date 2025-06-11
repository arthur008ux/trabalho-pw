import { alunos, Aluno } from "./Aluno";
import { Turma } from "./Turma";

const filtrarTurma: Record<Turma, Aluno[]> = Object.values(Turma).reduce((acc, turma) => {
    acc[turma] = [];
    return acc;
}, {} as Record<Turma, Aluno[]>);

for (const aluno of alunos) {
    filtrarTurma[aluno.turma].push(aluno);
}

export { filtrarTurma };

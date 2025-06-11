import React, { useState, useEffect } from 'react';
import { Turma } from '../models/Turma';
import { alunos, Aluno } from '../models/Aluno';
import { Disciplina } from '../models/Disciplina';
import { Ocorrencia } from '../models/Ocorrencia';
import './GerarOcorrencia.css'

interface AplicarOcorrenciaFormProps {
    aplicarOcorrencia: (ocorrencia: Ocorrencia) => void;
}

const AplicarOcorrenciaForm: React.FC<AplicarOcorrenciaFormProps> = ({ aplicarOcorrencia }) => {
    const [turmaSelecionada, setTurmaSelecionada] = useState<Turma | ''>('');
    const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);
    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<Disciplina | "">("");
    const [nomeProfessor, setNomeProfessor] = useState('');
    const [motivo, setMotivo] = useState('');


    const alunosDaTurma = turmaSelecionada ? alunos.filter(a => a.turma === turmaSelecionada) : [];

    useEffect(() => {
        setAlunoSelecionado(null);
    }, [turmaSelecionada]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!alunoSelecionado || !disciplinaSelecionada || !motivo || !nomeProfessor.trim()) {
            alert('Preencha todos os campos!');
            return;
        }


        const novaOcorrencia: Ocorrencia = {
            aluno: alunoSelecionado!,
            disciplina: disciplinaSelecionada as Disciplina,
            nomeProfessor,
            motivo,
            data: new Date()
        };

        aplicarOcorrencia(novaOcorrencia);

        setTurmaSelecionada('');
        setAlunoSelecionado(null);
        setDisciplinaSelecionada("");
        setMotivo('');
        setNomeProfessor('');
    };

    return (
        <form className="aplicar-ocorrencia-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="nomeProfessor">Professor:</label>
                <input
                    id="nomeProfessor"
                    type="text"
                    value={nomeProfessor}
                    onChange={e => setNomeProfessor(e.target.value)}
                    placeholder="Nome do professor"
                />
            </div>

            <div className="form-row">
                <label htmlFor="turma">Turma:</label>
                <select
                    id="turma"
                    value={turmaSelecionada}
                    onChange={e => setTurmaSelecionada(e.target.value as Turma)}
                >
                    <option value="">Selecione a turma</option>
                    {Object.values(Turma).map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <label htmlFor="aluno">Aluno:</label>
                <select
                    id="aluno"
                    value={alunoSelecionado?.matricula || ''}
                    onChange={e => {
                        const alu = alunosDaTurma.find(a => a.matricula === e.target.value) || null;
                        setAlunoSelecionado(alu);
                    }}
                    disabled={!turmaSelecionada}
                >
                    <option value="">Selecione o aluno</option>
                    {alunosDaTurma.map(a => (
                        <option key={a.matricula} value={a.matricula}>{a.nome}</option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <label htmlFor="disciplina">Disciplina:</label>
                <select
                    id="disciplina"
                    value={disciplinaSelecionada}
                    onChange={e => setDisciplinaSelecionada(e.target.value as Disciplina)}
                >
                    <option value="">Selecione a disciplina</option>
                    {Object.values(Disciplina).map(d => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <label htmlFor="motivo">Descrição da Ocorrência:</label>
                <textarea
                    id="motivo"
                    value={motivo}
                    onChange={e => setMotivo(e.target.value)}
                    placeholder="Descreva a ocorrência..."
                />
            </div>

            <button type="submit">Aplicar Ocorrência</button>
        </form>

    );
};

export default AplicarOcorrenciaForm;

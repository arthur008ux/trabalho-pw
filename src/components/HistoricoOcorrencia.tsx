import React from 'react';
import { Ocorrencia } from '../models/Ocorrencia';
import '../components/HistoricoOcorrencia.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface ListaOcorrenciasProps {
  ocorrencias: Ocorrencia[];
}

const HistoricoOcorrencia: React.FC<ListaOcorrenciasProps> = ({ ocorrencias }) => {
  return (
    <>
    <div className='head'>

          <Link to="../aplicar" ><h3>APLICAR OCORRÊNCIA</h3></Link>
          <Link to="../historico"><h3>HITÓRICO DE OCORRÊNCIA</h3></Link>

      </div>
    <div className="historico-ocorrencia">
      <h2>Histórico de Ocorrências</h2>
      {ocorrencias.length === 0 ? (
        <p>Nenhuma ocorrência aplicada ainda.</p>
      ) : (
        <ul>
          {ocorrencias.map((ocorrencia, index) => (
            <li key={index} className="ocorrencia-item">
              <p><strong>Aluno:</strong> {ocorrencia.aluno.nome}</p>
              <p><strong>Turma:</strong> {ocorrencia.aluno.turma}</p>
              <p><strong>Disciplina:</strong> {ocorrencia.disciplina}</p>
              <p><strong>Professor:</strong> {ocorrencia.nomeProfessor}</p>
              <p><strong>Motivo:</strong> {ocorrencia.motivo}</p>
              <p><strong>Data:</strong> {new Date(ocorrencia.data).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default HistoricoOcorrencia;

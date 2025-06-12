import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Turma } from '../models/Turma';
import { alunos, Aluno } from '../models/Aluno';
import { Disciplina } from '../models/Disciplina';
import { Ocorrencia } from '../models/Ocorrencia';
import './GerarOcorrencia.css'

export default function telaInicial(){
    return (
        <>
       
              <div className='main-index'>
                <Link to="../aplicar">
 <button className='button-main'>CLIQUE AQUI</button>
 </Link>
              </div>
              
        </>
    )
}
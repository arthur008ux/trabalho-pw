import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AplicarOcorrenciaForm from './components/GerarOcorrencia';
import HistoricoOcorrencia from './components/HistoricoOcorrencia';
import { Ocorrencia } from './models/Ocorrencia';
import "./App.css"
import TelaInicial from './components/Index';

function App() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  const aplicarOcorrencia = (novaOcorrencia: Ocorrencia) => {
    setOcorrencias(prev => [...prev, novaOcorrencia]);
  };

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<TelaInicial/>}/>
        <Route
          path="/aplicar"
          element={<AplicarOcorrenciaForm aplicarOcorrencia={aplicarOcorrencia} />}
        />
        <Route
          path="/historico"
          element={<HistoricoOcorrencia ocorrencias={ocorrencias} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

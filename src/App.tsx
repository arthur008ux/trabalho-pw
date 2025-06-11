import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AplicarOcorrenciaForm from './components/GerarOcorrencia';
import HistoricoOcorrencia from './components/HistoricoOcorrencia';
import { Ocorrencia } from './models/Ocorrencia';


function App() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  const aplicarOcorrencia = (novaOcorrencia: Ocorrencia) => {
    setOcorrencias(prev => [...prev, novaOcorrencia]);
  };

  return (
    <Router>
      <nav style={{textAlign: 'center', margin: '20px'}}>
        <Link to="/" style={{marginRight: '20px'}}>Aplicar Ocorrência</Link>
        <Link to="/historico">Histórico de Ocorrências</Link>
      </nav>

      <Routes>
        <Route
          path="/"
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

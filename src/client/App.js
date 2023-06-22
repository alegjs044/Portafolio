import React from 'react';
import Header from './componentes/header';
import AcercaDeMi from './componentes/acercade';
import TrayectoriaAcademica from './componentes/trayectoriaacademic';
import ExperienciaLaboral from './componentes/experiencia';
import Contacto from './componentes/contacto';
import Footer from './components/footer';
import './style/principal.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AcercaDeMi />
        <TrayectoriaAcademica />
        <ExperienciaLaboral />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;

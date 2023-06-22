import React from 'react';
import gitImage from '../imagenes/github.png';

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <div className="enlaces-contacto">
        <a href="https://github.com/alegjs044" target="_blank" rel="noopener noreferrer">
          <img src={gitImage} alt="LinkedIn" />
        </a>
        {/* Agrega más imágenes hipervinculadas según sea necesario */}
      </div>
    </section>
  );
}

export default Contacto;

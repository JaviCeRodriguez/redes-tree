import { Link } from "react-router-dom";
import { StyledNotFound } from "./index.styled";

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="message-error">
        <h3>Ups, pifiaste con la url 🙈</h3>
        <Link to="/" className="goto-home">
          Volver al inicio
        </Link>
      </div>
      <div className="message-noerror">
        <h4>¿Crees que es un error de la página?</h4>
        <p>
          Por favor, reportalo en el{" "}
          <a
            href="https://github.com/JaviCeRodriguez/redes-tree/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            repositorio abriendo un issue
          </a>{" "}
          🐻
        </p>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;

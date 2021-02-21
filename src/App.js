import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AccForm from "./componentes/AccForm.js";
import Lista from "./componentes/Lista.js";
import Form from "./componentes/Form.js";
import Nota from "./componentes/Nota.js";

function App() {
  const [notas, setNota] = useState([]);

  const crearNota = (nota) => {
    setNota([...notas, nota]);
  };

  // function HandleNotaChange(nota){
  // setNota(notas => [...notas, nota])
  //   }

  // function onClose(id) {
  //   setCities((oldCities) => oldCities.filter((c) => c.id != id));
  // }

  function onFilter(notaId) {
    let nota = notas.filter((n) => n.id === notaId);
    if (nota.length > 0) {
      return nota[0];
    } else {
      return null;
    }
  }

  return (
    <div className="container">
      <div className="container-left">
        <div className="search-bar">
          <form>
            <input type="text"></input>
            <input type="submit" value="Buscar"></input>
          </form>
        </div>
        <div>
          <Route path="/" render={() => <Lista notas={notas} />} />
        </div>
      </div>
      <div className="container-rigth">
        <AccForm />
        <Route path="/Form" render={() => <Form crearNota={crearNota} />} />
        <Route
          exact
          path="/nota/:notaId"
          render={({ match }) => <Nota nota={onFilter(match.params.notaId)} />}
        />
      </div>
    </div>
  );
}

export default App;

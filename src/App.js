import React, {useState} from "react";
import {Route} from 'react-router-dom';
import "./App.css";
import AccForm from "./componentes/AccForm.js";
import Lista from './componentes/Lista.js'
import Form from './componentes/Form.js'


function App() {
  const [notas, setNota] = useState([])

  function HandleNotaChange(nota){
     if (nota !== undefined){
      setNota(notas => [...notas, nota])
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
            <Lista notas={notas} />
          </div>
        </div>
        <div className="container-rigth">
          <AccForm/>
          <Form
            HandleNotaChange={(nota) => {
              HandleNotaChange(nota);
            }}
          />
        </div>
      </div>
    );
}

export default App;

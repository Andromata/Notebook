import React, {useState } from "react";
import {Link} from 'react-router-dom';
import uuid from 'uuid/dist/v4'

function Form({ crearNota }) {
  const [nota, setNota] = useState({
    date: "",
    tit: "",
    desc: "",
  });

  const handleInputChange = function (e) {
    setNota({
      ...nota,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if(nota.date.trim() === '' || nota.tit.trim() === '' || nota.desc.trim() === ''){
            return alert('No has escrito na')
          }
          
          nota.id = uuid();
          crearNota(nota);
          setNota({ date: "", tit: "", desc: "" });

        }}
      >
        <div className="form-header">
          <div className="form-date">
            <div>
              <span>Fecha</span>
            </div>
            <input
              id="date"
              name="date"
              type="date"
              onChange={handleInputChange}
              placeholder="Titulo"
              value={nota.date}
            />
          </div>

          <div className="form-tit">
            <div>
              <div>
                <span>Titulo</span>
              </div>
              <input
                id="tit"
                name="tit"
                type="text"
                onChange={handleInputChange}
                value={nota.tit}
              />
            
            </div>
          </div>
          <div className="form-desc">
            <div>
              <span>En que piensas?</span>
            </div>
            <div>
              <textarea
                id="desc"
                name="desc"
                onChange={handleInputChange}
                value={nota.desc}
              />
            </div>
          </div>
        </div>

        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}

export default Form;

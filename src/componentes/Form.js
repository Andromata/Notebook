import React, {useState } from "react";

function Form({ HandleNotaChange }) {
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
          e.preventDefault();
          HandleNotaChange(nota);
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
              valor={nota.date}
              onChange={handleInputChange}
              placeholder="Titulo"
            />
          </div>

          <div className="form-tit">
            <div>
              <div>
                <span>
                  Titulo
                </span>
              </div>
              <input
                id="tit"
                name="tit"
                type="text"
                valor={nota.tit}
                onChange={handleInputChange}
               
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span >En que piensas?</span>
          </div>
          <div>
            <textarea
              id="desc"
              name="desc"
              valor={nota.desc}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}

export default Form;

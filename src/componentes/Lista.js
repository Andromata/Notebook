import React from 'react'
import Card from './Card.js'

function Lista({notas}){
  if (notas) {
    return (
      <div>
        {notas.map(c => (
          <Card
            date={c.date}
            tit={c.tit}
            desc={c.desc}
          />
        ))}
      </div>
    );
  } else {
    return <div>sin notas</div>;
  }
}
export default Lista;
import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({tit, id}){
  
  return (
    <Link to= {`/nota/${id}`}>
      <div id={id}>{tit}</div>
    </Link>
  );
}


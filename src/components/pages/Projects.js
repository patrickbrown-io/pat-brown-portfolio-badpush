import React from 'react';

const canines = [
  {
    name: 'Spot',
    description: 'The best boy',
    id: 1,
  },
  {
    name: 'Zero',
    description: 'A kind soul',
    id: 2,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 3,
  },
];


export default function Projects(props) {
  return ( 
    <>
      {canines.map((dog) => (
      <div className="card">
      <img className="card-img-top" src="..." alt="Card image cap"/>
      <div className="card-body">
      <h5 className="card-title">{dog.name}</h5>
      <p className="card-text">{dog.description}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      ))}
    </>
  );
}

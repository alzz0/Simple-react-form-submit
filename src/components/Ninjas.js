//functional components
import React from "react";

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 10 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name:{ninja.name}</div>
        <div>id :{ninja.id}</div>
        <div>belt:{ninja.belt}</div>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;

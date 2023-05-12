import React from "react";

export default function PresentationBrazil() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-1 grid-flow-row grid-">
        <div className="p-5 text-center  row-start-1 row-end-2">
          <h1 className="text-3xl">VOYAGE AU BRESIL</h1>
        </div>
        <div className="text-center row-start-2 row-end-3">
          <h2>citation</h2>
        </div>
        <div className="p-5 pl-0 text-left col-start-2 col-end-4 row-start-1 row-end-4">
          Le Brésil, vaste pays d'Amérique du Sud, s'étend du bassin amazonien
          au nord à des vignobles et aux chutes d'Iguaçu au sud. La ville de Rio
          de Janeiro, caractérisée par sa statue du Christ Rédempteur de 38
          mètres de haut située au sommet du Corcovado, est réputée pour ses
          plages très fréquentées de Copacabana et d'Ipanema, ainsi que pour son
          énorme carnaval animé, avec défilés de chars, costumes flamboyants, et
          musique et danse samba.
        </div>
      </div>
    </div>
  );
}

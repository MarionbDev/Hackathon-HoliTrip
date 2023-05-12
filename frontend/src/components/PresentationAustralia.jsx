import React from "react";

export default function PresentationAustralie() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-1 grid-flow-row grid-">
        <div className="p-5 text-center  row-start-1 row-end-2">
          <h1 className="text-3xl">VOYAGE EN AUSTRALIE</h1>
        </div>
        <div className="text-center row-start-2 row-end-3">
          <h2>citation</h2>
        </div>
        <div className="p-5 pl-0 text-left col-start-2 col-end-4 row-start-1 row-end-4">
          L'Australie est un pays et continent entouré par les océans Indien et
          Pacifique. Ses principales villes, Sydney, Brisbane, Melbourne, Perth
          et Adélaïde, sont bâties sur la côte. La capitale, Canberra, est quant
          à elle située à l'intérieur des terres. Le pays est connu pour l'opéra
          de Sydney, la Grande Barrière de corail, ses grandes étendues sauvages
          et désertiques appelées l'Outback, et ses espèces animales uniques
          comme le kangourou et l'ornithorynque.
        </div>
      </div>
    </div>
  );
}

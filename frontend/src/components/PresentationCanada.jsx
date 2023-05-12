import React from "react";

export default function PresentationCanada() {
  return (
    <div className="p-5">
      <div className="md:grid md:grid-cols-3 gap-1 md:grid-flow-row md:grid-">
        <div className="p-5 text-center  row-start-1 row-end-2">
          <h1 className="text-3xl">VOYAGE AU CANADA</h1>
        </div>
        <div className="p-5 pl-0 text-left col-start-2 col-end-4 row-start-1 row-end-4">
          Le Canada est un pays nord-américain situé entre les États-Unis au sud
          et le cercle polaire au nord. Les principales villes sont Toronto,
          Vancouver, centre du cinéma de la côte ouest, Montréal et Québec,
          toutes deux francophones, et Ottawa, la capitale. Le Canada compte,
          parmi ses vastes étendues sauvages, le parc national de Banff avec ses
          nombreux lacs situé dans les montagnes Rocheuses. Il abrite également
          les célèbres et majestueuses chutes du Niagara.
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Presentation() {
  return (
    <div className="p-5 -mt-8">
      <div className="md:grid md:grid-cols-3 md:gap-1 md:grid-flow-row md:grid-">
        <div className="p-5 text-center  md:row-start-1 md:row-end-2">
          <h1 className="text-xl md:text-3xl uppercase"> HoliTrip</h1>
        </div>
        <div className="p-5 scroll-pl-8 text-left col-start-2 col-end-4 row-start-1 row-end-4 md:mr-16">
          Holitrip est une plateforme en ligne spécialisée dans l'organisation
          de road trips de 8 jours à travers différents pays. Notre site propose
          des itinéraires soigneusement conçus, mettant en valeur les points
          d'intérêt les plus captivants de chaque destination. Que vous soyez
          passionné d'aventure, de culture, de gastronomie ou de paysages
          époustouflants, Holitrip vous offre une expérience inoubliable.
          Découvrez des itinéraires uniques, profitez de conseils d'experts et
          vivez des aventures exceptionnelles lors de votre prochain voyage avec
          Holitrip.
        </div>
      </div>
    </div>
  );
}

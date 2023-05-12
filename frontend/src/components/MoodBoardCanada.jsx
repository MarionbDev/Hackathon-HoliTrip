import React from "react";
import { Link } from "react-router-dom";

const MoodBoardArray = [
  {
    jour: "Jour 1",
    ville: "DEPART",
    description: "",
    image:
      "https://img.freepik.com/photos-gratuite/homme-voyageur-concept-style-vie-voyage-sac-dos-alpinisme_1150-9246.jpg",
  },

  {
    jour: "Jour 2",
    ville: "Quebec",
    description:
      "Québec est une ville située sur le fleuve Saint-Laurent, dans la province canadienne essentiellement francophone de Québec. Fondée en 1608, elle comprend un centre colonial fortifié, le Vieux-Québec et la place Royale, avec des bâtiments en pierre et des rues étroites.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ch%C3%A2teau_Frontenac%2C_Quebec_city%2C_Canada.jpg/1200px-Ch%C3%A2teau_Frontenac%2C_Quebec_city%2C_Canada.jpg",
  },
  {
    jour: "Jour 3",
    ville: "Montréal",
    description:
      "Montréal est la principale ville du Québec. Grande métropole insulaire et portuaire du fleuve Saint-Laurent, au pied des rapides de Lachine, c'est la deuxième ville la plus peuplée du Canada, après Toronto, et la plus grande ville francophone d'Amérique.",

    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/dc/42/5a/caption.jpg?w=500&h=400&s=1",
  },
  {
    jour: "Jour 4",
    ville: "Ottawa",
    description:
      "Ottawa est la capitale du Canada et se trouve dans la province de l'Ontario au sud-est du pays, à proximité de la ville de Montréal et de la frontière des États-Unis. Située sur la rivière des Outaouais, elle abrite la Colline du Parlement et son architecture victorienne grandiose, ainsi que des musées comme le musée des beaux-arts du Canada, dans lequel sont exposées des collections d'œuvres d'artistes autochtones et canadiens.",
    image:
      "https://cdn.britannica.com/67/93667-050-27D9498C/Rideau-Canal-Parliament-Buildings-Ottawa.jpg",
  },
  {
    jour: "Jour 5",
    ville: "Toronto",
    description:
      "Toronto, capitale de la province de l'Ontario, est l'une des principales villes canadiennes, située sur la rive nord-ouest du lac Ontario. Cette métropole dynamique inclut nombre de gratte-ciel vertigineux, dominés par l'emblématique tour CN. ",
    image:
      "https://media.istockphoto.com/id/535849289/fr/photo/vue-de-toronto-au-cr%C3%A9puscule.jpg?s=612x612&w=0&k=20&c=DArLNUa5o9Z9s5IE84o-uGTQfV6nkxXcBuljRcbpBT4=",
  },
  {
    jour: "Jour 6",
    ville: "Thunder-Bay",
    description:
      "Thunder Bay est une municipalité ontarienne née en 1970 de la fusion des villes de Fort William et Port Arthur ainsi que des cantons de Neebing et McIntyre. C'est la deuxième plus grande ville du nord ontarien.",
    image:
      "https://mediaim.expedia.com/destination/1/ebc8a8e65e3d708b51ee540339a8e58c.jpg",
  },
  {
    jour: "Jour 7",
    ville: "Winnipeg",
    description:
      "Winnipeg est la capitale de la province canadienne du Manitoba. S'articulant autour de La Fourche, un site historique aux confluences de la rivière Rouge et de la rivière Assiniboine, elle comporte des entrepôts reconvertis en boutiques et en restaurants ainsi qu'un vaste espace vert qui accueille des festivals, des concerts et des expositions.",
    image:
      "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/winnipeg-mobile.jpg?rev=3e3dea785eec41b3ab5cbccefdb06ccf",
  },
  {
    jour: "Jour 8",
    ville: "RETOUR",
    description: "",
    image:
      "https://st2.depositphotos.com/52523706/47325/i/450/depositphotos_473250976-stock-photo-aspen-boardman-color-fall-fog.jpg",
  },
];

export default function MoodBoardCanada() {
  return (
    <div id="MoodContainer" className="">
      {MoodBoardArray.map((city) => (
        <Link
          to={`/canada/${city.ville}`}
          id={city.ville}
          className="image-container border-solid border-4 border-white  relative"
        >
          <img
            id={city.name}
            src={city.image}
            alt={city.name}
            className="h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
            <div className="Jour">{city.jour}</div>
            <div className="Ville font-bold">{city.ville}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

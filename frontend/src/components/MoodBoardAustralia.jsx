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
    ville: "Brisbane",
    description:
      "Québec est une ville située sur le fleuve Saint-Laurent, dans la province canadienne essentiellement francophone de Québec. Fondée en 1608, elle comprend un centre colonial fortifié, le Vieux-Québec et la place Royale, avec des bâtiments en pierre et des rues étroites.",
    image:
      "https://www.tourmag.com/photo/art/grande/70829271-49361474.jpg?v=1676633329",
  },
  {
    jour: "Jour 3",
    ville: "Sydney",
    description:
      "Montréal est la principale ville du Québec. Grande métropole insulaire et portuaire du fleuve Saint-Laurent, au pied des rapides de Lachine, c'est la deuxième ville la plus peuplée du Canada, après Toronto, et la plus grande ville francophone d'Amérique.",

    image: "https://www.gostudy.fr/wp-content/uploads/2019/10/sydney.jpg",
  },
  {
    jour: "Jour 4",
    ville: "Canberra",
    description:
      "Ottawa est la capitale du Canada et se trouve dans la province de l'Ontario au sud-est du pays, à proximité de la ville de Montréal et de la frontière des États-Unis. Située sur la rivière des Outaouais, elle abrite la Colline du Parlement et son architecture victorienne grandiose, ainsi que des musées comme le musée des beaux-arts du Canada, dans lequel sont exposées des collections d'œuvres d'artistes autochtones et canadiens.",
    image:
      "https://g7y6h3a7.rocketcdn.me/wp-content/uploads/2020/03/visiter-canberra2.jpg",
  },
  {
    jour: "Jour 5",
    ville: "Melbourne",
    description:
      "Toronto, capitale de la province de l'Ontario, est l'une des principales villes canadiennes, située sur la rive nord-ouest du lac Ontario. Cette métropole dynamique inclut nombre de gratte-ciel vertigineux, dominés par l'emblématique tour CN. ",
    image:
      "https://www.australia-australie.com/wp-content/uploads/2017/01/melbourne-05.jpg",
  },
  {
    jour: "Jour 6",
    ville: "Adelaide",
    description:
      "Thunder Bay est une municipalité ontarienne née en 1970 de la fusion des villes de Fort William et Port Arthur ainsi que des cantons de Neebing et McIntyre. C'est la deuxième plus grande ville du nord ontarien.",
    image:
      "https://media.istockphoto.com/id/535722805/fr/photo/ciity-adela%C3%AFde-australie.jpg?s=612x612&w=0&k=20&c=2qVkjRpR01bzk8RdZMdR_MzX-5uZcAg1Ovl00lVt5DU=",
  },
  {
    jour: "Jour 7",
    ville: "Auburn",
    description:
      "Winnipeg est la capitale de la province canadienne du Manitoba. S'articulant autour de La Fourche, un site historique aux confluences de la rivière Rouge et de la rivière Assiniboine, elle comporte des entrepôts reconvertis en boutiques et en restaurants ainsi qu'un vaste espace vert qui accueille des festivals, des concerts et des expositions.",
    image:
      "https://cdn.pixabay.com/photo/2016/10/26/20/30/samford-hall-1772565_1280.jpg",
  },
  {
    jour: "Jour 8",
    ville: "RETOUR",
    description: "",
    image:
      "https://st2.depositphotos.com/52523706/47325/i/450/depositphotos_473250976-stock-photo-aspen-boardman-color-fall-fog.jpg",
  },
];

export default function MoodBoardAustralia() {
  return (
    <div id="MoodContainer" className="">
      {MoodBoardArray.map((city) => (
        <Link
          to={`/australia/${city.ville}`}
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

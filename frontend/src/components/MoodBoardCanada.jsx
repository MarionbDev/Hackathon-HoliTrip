const MoodBoardArray = [
  {
    jour: "Jour 1",
    ville: "DEPART",
    description: "",
    image: "",
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

    image: "",
  },
  {
    jour: "Jour 4",
    ville: "Ottawa",
    description:
      "Ottawa est la capitale du Canada et se trouve dans la province de l'Ontario au sud-est du pays, à proximité de la ville de Montréal et de la frontière des États-Unis. Située sur la rivière des Outaouais, elle abrite la Colline du Parlement et son architecture victorienne grandiose, ainsi que des musées comme le musée des beaux-arts du Canada, dans lequel sont exposées des collections d'œuvres d'artistes autochtones et canadiens.",
    image: "",
  },
  {
    jour: "Jour 5",
    ville: "Toronto",
    description:
      "Toronto, capitale de la province de l'Ontario, est l'une des principales villes canadiennes, située sur la rive nord-ouest du lac Ontario. Cette métropole dynamique inclut nombre de gratte-ciel vertigineux, dominés par l'emblématique tour CN. ",
    image: "",
  },
  {
    jour: "Jour 6",
    ville: "Thunder-Bay",
    description:
      "Thunder Bay est une municipalité ontarienne née en 1970 de la fusion des villes de Fort William et Port Arthur ainsi que des cantons de Neebing et McIntyre. C'est la deuxième plus grande ville du nord ontarien.",
    image: "",
  },
  {
    jour: "Jour 7",
    ville: "Winnipeg",
    description:
      "Winnipeg est la capitale de la province canadienne du Manitoba. S'articulant autour de La Fourche, un site historique aux confluences de la rivière Rouge et de la rivière Assiniboine, elle comporte des entrepôts reconvertis en boutiques et en restaurants ainsi qu'un vaste espace vert qui accueille des festivals, des concerts et des expositions.",
    image: "",
  },
  {
    jour: "Jour 8",
    ville: "RETOUR",
    description: "",
    image: "",
  },
];

export default function MoodBoardCanada() {
  return (
    <div id="MoodContainer" className="">
      {MoodBoardArray.map((city) => (
        <div id={city.ville} className=" border-solid border-2 text-xs">
          <div>{city.jour}</div>
          <div className="font-bold">{city.ville}</div>
          <div>{city.description}</div>
        </div>
      ))}
    </div>
  );
}

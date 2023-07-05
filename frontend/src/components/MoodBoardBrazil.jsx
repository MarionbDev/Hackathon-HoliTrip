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
    ville: "Juiz-de-Fora",
    description:
      "Juiz de Fora est une commune brésilienne du sud-est de l'État du Minas Gerais, localisée dans la zone de la Mata Mineira, à 283 km au sud de Belo Horizonte, à 180 km au nord de Rio de Janeiro et à 470 km au nord de São Paulo.",
    image:
      "https://q5e5q6q7.stackpathcdn.com/wp-content/uploads/2017/10/Juiz-de-Fora.jpg",
  },
  {
    jour: "Jour 3",
    ville: "Petropolis",
    description:
      "Petrópolis, connue aussi sous son surnom de « Cité impériale » du Brésil, est une ville brésilienne du centre de l'État de Rio de Janeiro. Elle se trouve à 68 km au nord de la ville de Rio de Janeiro. ",

    image:
      "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/catedral-de-petropolis-rio-de-janeiro.jpeg?quality=70&strip=info&w=928&w=636",
  },
  {
    jour: "Jour 4",
    ville: "Rio",
    description:
      "Rio de Janeiro est une grande ville du Brésil située en bord de mer. Elle est connue pour ses plages de Copacabana et d'Ipanema, sa statue du Christ Rédempteur de 38 mètres de haut située au sommet du Corcovado et le Pain de Sucre, pic de granite dont le sommet est accessible via 2 téléphériques. La ville est également connue pour ses favelas tentaculaires (bidonvilles). Le célèbre carnaval de Rio, avec défilés de chars, costumes flamboyants et danseurs de samba, est considéré comme l'un des plus grands au monde.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/29/18/49/brazil-4803308_1280.jpg",
  },
  {
    jour: "Jour 5",
    ville: "Sao-Paulo",
    description:
      "São Paulo, centre financier dynamique du Brésil, compte parmi les villes les plus populeuses du monde, et possède de nombreuses institutions culturelles et une riche tradition architecturale. Ses bâtiments emblématiques vont de sa cathédrale néogothique au gratte-ciel Prédio Martinelli de 1929, en passant par l'Edifício Copan de l'architecte moderniste Oscar Niemeyer. Le Pátio do Colégio de style colonial marque l'endroit où les prêtres jésuites ont fondé la ville en 1554. ",
    image:
      "https://cdn.pixabay.com/photo/2020/08/12/16/23/lake-5483081_1280.jpg",
  },
  {
    jour: "Jour 6",
    ville: "Curitiba",
    description:
      "Curitiba est la capitale d'un État du sud du Brésil, Paraná. L’horizon de la ville peut être observé depuis la tour panoramique (Panoramic Tower), au sommet de laquelle se trouve un observatoire. En tant que pôle culturel de renom, Curitiba possède un grand nombre de salles de spectacle dont l’ópera de Arame, une construction formée de tubes en fer et d’un toit transparent, et l’immense théâtre Guaíra, qui offre une programmation variée",
    image:
      "https://www.combien-coute.net/site/images/illustration/curitiba_261.jpg",
  },
  {
    jour: "Jour 7",
    ville: "Porto-Alegre",
    description:
      "Porto Alegre est la capitale de l'État du Rio Grande do Sul, au Brésil, sise entre le rio Guaíba et ses nombreuses îles, et plusieurs morros couverts de végétation, et composée de quatre-vingt-quatre quartiers. ",
    image:
      "https://content.r9cdn.net/rimg/dimg/e0/50/4cf9b0be-city-26252-17314ad3f75.jpg?crop=true&width=1020&height=498",
  },
  {
    jour: "Jour 8",
    ville: "RETOUR",
    description: "",
    image:
      "https://st2.depositphotos.com/52523706/47325/i/450/depositphotos_473250976-stock-photo-aspen-boardman-color-fall-fog.jpg",
  },
];

export default function MoodBoardBrazil() {
  if (!MoodBoardBrazil) {
    return (
      <div className="min-h-screen flex  flex-col items-center mt-20  md:ml-36 md:mt-2">
        <p className="md:text-xl mb-20 ">Chargement du Moodboard...</p>
      </div>
    );
  }

  return (
    <div id="MoodContainer" className="">
      {MoodBoardArray.map((city, index) => (
        <div
          id={city.ville}
          className="image-container border-solid border-4 border-white relative"
          key={city.id}
        >
          {index !== 0 && index !== MoodBoardArray.length - 1 ? (
            <Link to={`/Brazil/${city.ville}`}>
              <img
                src={city.image}
                alt={city.ville}
                className="h-full w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                <div className="Jour">{city.jour}</div>
                <div className="Ville font-bold">{city.ville}</div>
              </div>
            </Link>
          ) : (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
              <img
                src={city.image}
                alt={city.ville}
                className="h-full w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
                <div className="Jour">{city.jour}</div>
                <div className="Ville font-bold">{city.ville}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

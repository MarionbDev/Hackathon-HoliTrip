import React from "react";

const trips = [
  {
    title: "Pérou",
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    id: 1,
    genre: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla tellus, porttitor in rhoncus non, laoreet at risus.",
  },
  {
    title: "Australie",
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    id: 2,
    genre: "Science-fiction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla tellus, porttitor in rhoncus non, laoreet at risus.",
  },
  {
    title: "Canada",
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla tellus, porttitor in rhoncus non, laoreet at risus.",
  },
];

export default function ProposalList() {
  return (
    <div className="md:p-5 md:col-start-2 md:col-end-4">
      <h2 className=" uppercase ml-4 my-6  py-1 text-lg  md:ml-36">
        Road Trips proposés
      </h2>
      <div className="flex gap-6 overflow-x-auto  mx-3 md:gap-16 w-auto md:ml-11 md:mr-11 items-center justify-center">
        {trips.map((trip) => (
          <div className="w-24 md:w-72 flex-shrink-0  " key={trip.title}>
            <img src={trip.image} alt={trip.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

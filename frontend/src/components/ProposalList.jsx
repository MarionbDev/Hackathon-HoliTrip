import React, { useState } from "react";

const trips = [
  {
    title: "Brésil",
    image:
      "https://cdn.pixabay.com/photo/2015/06/14/23/35/rio-de-janeiro-809756_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2017/08/09/09/52/vancouver-2613994_1280.jpg",
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla tellus, porttitor in rhoncus non, laoreet at risus.",
  },
];

export default function ProposalList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="md:p-5 md:col-start-2 md:col-end-4">
      <h2 className="title uppercase my-6 py-1 text-lg">Road Trips proposés</h2>
      <div className="flex gap-6 overflow-x-auto mx-3 md:gap-16 w-auto md:ml-11 md:mr-11 items-center justify-center mb-10">
        {trips.map((trip, index) => (
          <div
            className="w-24 md:w-72 flex-shrink-0"
            key={trip.title}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container">
              <img src={trip.image} alt={trip.title} />
              {hoveredIndex === index && (
                <div className="title-overlay">
                  <h2>{trip.title}</h2>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const datas = [
  {
    id: 10,
    image:
      "https://cdn.pixabay.com/photo/2020/01/31/21/24/brazil-4809003_1280.jpg",
    title: "Pays 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget. `,
  },
  {
    id: 11,
    image:
      "https://cdn.pixabay.com/photo/2017/11/09/22/20/campos-do-jordao-2934837_1280.jpg",
    title: "Pays 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
  {
    id: 12,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/14/beach-1853147_1280.jpg",
    title: "Pays 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
];

export default function CarrouselBrazil() {
  return (
    <Carousel
      autoPlay
      interval={4000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      className="md:max-w-full md:h ml-auto mr-auto relative -top-10 md:-top-16 z-2"
    >
      {datas.map((data) => (
        <div key={data.id}>
          <img src={data.image} alt={data.title} />
          {/* <div className="overlay">
            <h1 className="text-6xl uppercase px-4 py-2">{data.title}</h1>
            <p className="text-xs p-4 py-1 md:text-sm">{data.description}</p>
          </div> */}
        </div>
      ))}
    </Carousel>
  );
}

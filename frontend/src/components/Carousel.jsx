import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const datas = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/11/22/07/11/river-5765785_1280.jpg",

    title: "Pays 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget. `,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2019/07/09/13/49/japan-4326883_1280.jpg",

    title: "Pays 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg",
    title: "Pays 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
];

export default function Carrousel() {
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

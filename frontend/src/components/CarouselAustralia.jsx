import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const datas = [
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2018/08/14/09/34/sydney-3605032_1280.jpg",
    title: "Pays 1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget. `,
  },
  {
    id: 8,
    image:
      "https://cdn.pixabay.com/photo/2017/01/12/02/20/australia-1973524_1280.jpg",
    title: "Pays 2",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2018/02/27/21/48/australia-3186715_1280.jpg",
    title: "Pays 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
];

export default function CarrouselAustralia() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
        </div>
      ))}
    </Carousel>
  );
}

import { useState, useEffect } from "react";

export default function CardCity() {
  const [city, setCity] = useState();

  const getCity = () => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/xid/N4816874223?apikey=5ae2e3f221c38a28845f05b6f386be0cdad7935fb4ef722b54e158e4`
    )
      .then((response) => response.json())
      .then((data) => setCity(data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCity();
  }, []);

  if (!city) {
    return <p>Loading the game...</p>;
  }

  return (
    <div>
      <figure>
        <img src={city.preview.source} alt={city.name} />
      </figure>
      <figcaption>
        <p>
          {city.name} {city.address.city}
        </p>
        <p>{city.wikipedia_extracts.text}</p>
      </figcaption>
    </div>
  );
}

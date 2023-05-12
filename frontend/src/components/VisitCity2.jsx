import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const getVisit = (cityId, apiKey) => {
  return fetch(
    `https://api.opentripmap.com/0.1/en/places/xid/${cityId}?apikey=${apiKey}`
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const City2 = ({ cityId, apiKey }) => {
  const [visit, setVisit] = useState();

  useEffect(() => {
    getVisit(cityId, apiKey).then((data) => setVisit(data));
  }, [cityId, apiKey]);

  if (!visit) {
    return <p>Loading the game...</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 grid-flow-row grid-">
        <figure className="p-5 text-center bg-white col-start-2 col-end-3 row-start-1 row-end-4">
          <img src={visit.preview.source} alt={visit.name} />
        </figure>
        <figcaption>
          <h2 className="title p-5 text-center bg-white col-start-1 row-start-1 row-end-2">
            {visit.name} {visit.address.city}
          </h2>
          <p className="p-5 text-center bg-white col-start-2  row-start-2 row-end-4">
            {visit.wikipedia_extracts.text}
          </p>
        </figcaption>
      </div>
    </div>
  );
};

export default City2;

City2.propTypes = {
  cityId: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

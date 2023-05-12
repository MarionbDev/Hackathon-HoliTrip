import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const getVisit = (cityId) => {
  return fetch(
    `https://api.opentripmap.com/0.1/en/places/xid/${cityId}?apikey=${
      import.meta.env.VITE_API_KEY
    }`
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
      <div className="md:grid md:grid-cols-3 md:gap-4 md:grid-flow-row md:grid- mb-12">
        <h2 className="title p-5 text-center uppercase bg-white col-start-1 col-end-4 row-start-1 row-end-2">
          {visit.name} {visit.address.city}
        </h2>
        <div className="p-5 md:mr-10 text-center bg-white row-start-2 row-end-4 col-start-3 col-end-4">
          <img src={visit.preview.source} alt={visit.name} />
        </div>
        <div className="p-5 md:ml-24 text-right bg-white col-start-1 col-end-3 row-start-2 row-end-4">
          {visit.wikipedia_extracts.text}
        </div>
      </div>
    </div>
  );
};

export default City2;

City2.propTypes = {
  cityId: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

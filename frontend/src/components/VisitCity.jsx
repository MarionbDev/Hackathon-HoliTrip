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

const City = ({ cityId, apiKey }) => {
  const [visit, setVisit] = useState();

  useEffect(() => {
    getVisit(cityId, apiKey).then((data) => setVisit(data));
  }, [cityId, apiKey]);

  if (!visit) {
    return <p>Loading page...</p>;
  }

  return (
    <div className="mt-8">
      <div className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div className="md:grid md:grid-cols-3 md:gap-4 md:grid-flow-row md:grid- mb-12">
        <h2 className="title p-5 text-center uppercase col-start-1 col-end-4 row-start-1 row-end-2">
          {visit.name} {visit.address.city}
        </h2>
        <div className="p-5 md:ml-10 text-center  row-start-2 row-end-4 col-start-1 col-end-2">
          <img src={visit.preview.source} alt={visit.name} />
        </div>
        <div className="p-5 md:mr-24 text-left e col-start-2 col-end-4 row-start-2 row-end-4">
          {visit.wikipedia_extracts.text}
        </div>
      </div>
    </div>
  );
};

export default City;

City.propTypes = {
  cityId: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

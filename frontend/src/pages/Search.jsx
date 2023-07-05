import React, { useState, useEffect, useRef } from "react";
import SearchBarHome from "../components/SearchBarHome";
import nextForward from "../assets/nextForward.svg";

export default function Search() {
  const [searchInput, setSearchInput] = useState(""); // Etat de la barre de recherche
  const [searchResults, setSearchResults] = useState([]); // Etat des résultats cherchés
  const [currentPage, setCurrentPage] = useState(1); // Etat pour la page en cours
  const itemsPerPage = 5; // Nb d'éléments par recherche
  const [selectedPOI, setSelectedPOI] = useState(null); // Etat pour le point d'intérêt sélectionné
  const [poiDescription, setPOIDescription] = useState(""); // Etat pour la description du point d'intérêt
  const [poiImage, setPOIImage] = useState(""); // Etat pour l'image du point d'intérêt
  const [totalPOI, setTotalPOI] = useState(0); // Etat pour le nb total des POI
  const [cityLon, setCityLon] = useState(0); // Etat pour les coordonnées des POI
  const [cityLat, setCityLat] = useState(0); // Etat pour les coordonnées des POI
  const currentPageRef = useRef(1); // Permet de stocker une valeur modifiable qui ne provoque pas de nouveau rendu lors de la mise à jour

  const searchCity = (query) => {
    const offset = (currentPageRef.current - 1) * itemsPerPage; // Calcul du decalage lors de la pagination et nombre de POI affiché par page
    fetch(
      // Récupère les infos géo d'une ville
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then(({ status, lon, lat }) => {
        if (status === "OK") {
          setCityLon(lon);
          setCityLat(lat);

          fetch(
            // Récupère les POI dans un périmètre de 1000m.
            `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&limit=${itemsPerPage}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json&apikey=${
              import.meta.env.VITE_API_KEY
            }`
          )
            .then((response) => response.json())
            .then((dataInterest) => {
              setSearchResults(dataInterest);
            })
            .catch((err) => console.error(err));
        } else {
          setSearchResults([]);
        }
      })
      .catch((err) => console.error(err));
  };

  const pOIDetails = (xid) => {
    fetch(
      // Récupère l'image et la description des POI
      `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setPOIDescription(data.wikipedia_extracts?.text || "");
        setPOIImage(data.preview?.source || "");
      })
      .catch((err) => console.error(err));
  };

  const totalPoi = (lon, lat) => {
    fetch(
      // Récupère le total des POI par City
      `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&limit=1&offset=0&lon=${lon}&lat=${lat}&rate=2&format=count&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalPOI(data.count);
      })
      .catch((err) => console.error(err));
  };

  // Permet de mettre à jour l'affichage en cas de recherche ou non et réinitialise les valeurs
  useEffect(() => {
    if (searchInput !== "") {
      currentPageRef.current = currentPage;
      searchCity(searchInput);
    } else {
      setSelectedPOI(null);
      setPOIImage("");
      setPOIDescription("");
    }
  }, [searchInput, currentPage]);

  // Permet de mettre à jour l'image et la description lorsqu'un POI est sélectionné
  useEffect(() => {
    if (selectedPOI) {
      pOIDetails(selectedPOI);
    } else {
      setPOIDescription("");
      setPOIImage("");
    }
  }, [selectedPOI]);

  // Permet de mettre a jour l'état de la fonction totalPOI en cas de changement de lon et lat
  useEffect(() => {
    totalPoi(cityLon, cityLat);
  }, [cityLon, cityLat]);

  const handlePageChange = (page) => {
    currentPageRef.current = page;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <header className="h-40 md:mb-20 md:h-72 -mt-8 bg-slate-500 mb-8" />
      <SearchBarHome query={searchInput} setQuery={setSearchInput} />
      <div className=" flex justify-center">
        <h2 className="mt-10 text-base border p-5 w-10/12">
          {totalPOI} Point{totalPOI > 1 ? "s" : ""} d'intérêt dans un rayon de 1
          km
        </h2>
      </div>
      <div className="w-11/12 flex mt-12 justify-between">
        {searchResults.length > 0 && (
          <ul className="flex flex-col items-center w-2/4">
            {searchResults.map((result) => (
              <li className="border h-24 p-2" key={result.xid}>
                <button
                  type="button"
                  onClick={() => setSelectedPOI(result.xid)}
                >
                  <h5 className="text-left text-sm font-semibold mb-4 md:w-96 truncate">
                    {result.name}
                  </h5>
                  <p className="text-sm text-left md:w-96 truncate">
                    {result.kinds}
                  </p>
                  {result.image && <img src={result.image} alt={result.name} />}
                </button>
              </li>
            ))}
            <div className="mt-4">
              <button
                className="mr-8 rounded-full p-2 bg-slate-200 "
                type="button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <img
                  className="w-7 h-7 rotate-180"
                  src={nextForward}
                  alt="forward"
                />
              </button>
              <button
                className="ml-8 rounded-full p-2 bg-slate-200 "
                type="button"
                disabled={searchResults.length < itemsPerPage}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <img className="w-7 h-7 " src={nextForward} alt="next" />
              </button>
            </div>
          </ul>
        )}
        {selectedPOI && (
          <div className="flex flex-col items-center w-2/4">
            <img className="w-64" src={poiImage} alt="Point of Interest" />
            <p className="w-11/12 mt-8">{poiDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

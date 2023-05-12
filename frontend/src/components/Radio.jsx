import { useState, useRef } from "react";
import PropTypes from "prop-types";
import imgRadio from "../assets/radio/radioRoad.jpg";
import playIcon from "../assets/radio/play.png";
import pauseIcon from "../assets/radio/pause.png";

export default function Radio({ favicon, name, country, url }) {
  const [playRadio, setPlayRadio] = useState(false);
  const audioRef = useRef();

  const handlePlayRadio = () => {
    if (playRadio === false) {
      setPlayRadio(true);
      audioRef.current.play();
    } else {
      setPlayRadio(false);
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <figure>
        {favicon ? (
          <div className="sm:h-40 flex mb-1 md:mb-5">
            <img
              src={favicon}
              alt={name}
              className="rounded-md md:w-40 mx-auto md:py-0 md:rounded-md sm:w-32 w-24 h-24 sm:h-32 md:h-auto"
            />
          </div>
        ) : (
          <div className="sm:h-40 flex mb-1 md:mb-5">
            <img
              src={imgRadio}
              alt="radio-par-defaut"
              className="rounded-md md:w-40 mx-auto md:py-0 md:rounded-md sm:w-32 w-24 h-24 sm:h-auto "
            />
          </div>
        )}
        <figcaption className="text-center text-whit md:space-y-0.5 flex justify-between items-start sm:items-center ">
          <div className="w-8/12 text-start sm:px-2 truncate">
            <h2 className="font-bold text-white text-xs sm:text-base truncate">
              {name}
            </h2>
            <p className="text-[8px] text-xs truncate">{country}</p>
          </div>
          <div>
            <button type="button" onClick={handlePlayRadio}>
              {playRadio === false ? (
                <img src={playIcon} alt="play" className=" w-10 sm:w-16 mb-2" />
              ) : (
                <img
                  src={pauseIcon}
                  alt="pause"
                  className="w-10 sm:w-16 mb-2"
                />
              )}
            </button>
          </div>
        </figcaption>
      </figure>
      <audio ref={audioRef}>
        <track default kind="captions" srcLang="fr" src={url} />
        <source src={url} type="audio/mpeg" />
        Your browser does not support this audio format.
      </audio>
    </div>
  );
}

Radio.defaultProps = {
  favicon: "",
};

Radio.propTypes = {
  favicon: PropTypes.string,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

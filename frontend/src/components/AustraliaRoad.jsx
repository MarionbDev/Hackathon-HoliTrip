import { useEffect } from "react";
import { Link } from "react-router-dom";
import City from "./VisitCity";
import City2 from "./VisitCity2";
import nextForward from "../assets/nextForward.svg";

const Brisbane = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Australia" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5  "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
        <City cityId="W4282955" />
        <City2 cityId="Q5883263" />
        <City cityId="W8036230" />
      </div>
    </div>
  );
};

const Sydney = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div className=" ml-2 mt-12">
        <Link to="/Australia">
          <button
            className="  flex  rounded-full p-4 bg-slate-200 "
            type="button"
          >
            <img
              className=" rotate-180 w-5 h-5  "
              src={nextForward}
              alt="forward"
            />
          </button>
        </Link>
      </div>
      <div>
        <City cityId="W282238523" />
        <City2 cityId="W16599528" />
        <City cityId="R2030042" />
      </div>
    </div>
  );
};

const Canberra = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div className=" ml-2 mt-12">
        <Link to="/Australia">
          <button
            className="  flex  rounded-full p-4 bg-slate-200 "
            type="button"
          >
            <img
              className=" rotate-180 w-5 h-5  "
              src={nextForward}
              alt="forward"
            />
          </button>
        </Link>
      </div>

      <div>
        <City cityId="W11305622" />
        <City2 cityId="R2840634" />
        <City cityId="N2169745707" />
      </div>
    </div>
  );
};

const Melbourne = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div className=" ml-2 mt-12">
        <Link to="/Australia">
          <button
            className="  flex  rounded-full p-4 bg-slate-200 "
            type="button"
          >
            <img
              className=" rotate-180 w-5 h-5  "
              src={nextForward}
              alt="forward"
            />
          </button>
        </Link>
      </div>

      <div>
        <City cityId="N6362846387" />
        <City2 cityId="R6592679" />
        <City cityId="W46854371" />
      </div>
    </div>
  );
};
const Auburn = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div className=" ml-2 mt-12">
        <Link to="/Australia">
          <button
            className="  flex  rounded-full p-4 bg-slate-200 "
            type="button"
          >
            <img
              className=" rotate-180 w-5 h-5  "
              src={nextForward}
              alt="forward"
            />
          </button>
        </Link>
      </div>

      <div>
        <City cityId="Q7568561" />
        <City2 cityId="Q5048317" />
        <City cityId="Q7084772" />
      </div>
    </div>
  );
};

const Adelaide = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div className=" ml-2 mt-12">
        <Link to="/Australia">
          <button
            className="  flex  rounded-full p-4 bg-slate-200 "
            type="button"
          >
            <img
              className=" rotate-180 w-5 h-5  "
              src={nextForward}
              alt="forward"
            />
          </button>
        </Link>
      </div>

      <div>
        <City cityId="W679957023" />
        <City2 cityId="Q7603406" />
        <City cityId="N301928950" />
      </div>
    </div>
  );
};

export { Brisbane, Sydney, Canberra, Melbourne, Adelaide, Auburn };

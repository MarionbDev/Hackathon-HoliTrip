import { useEffect } from "react";
import { Link } from "react-router-dom";
import City from "./VisitCity";
import City2 from "./VisitCity2";
import nextForward from "../assets/nextForward.svg";

const Toronto = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Canada" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5 "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <City cityId="N4816874223" />
        <City2 cityId="Q4284139" />
        <City cityId="W4942687" />
      </div>
    </div>
  );
};
const Ottawa = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Canada" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5 "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
      </div>{" "}
      <div>
        <City cityId="W68588608" />
        <City2 cityId="N4568910828" />
        <City cityId="W223069822" />
      </div>
    </div>
  );
};

const Quebec = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Canada" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5 "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
      </div>{" "}
      <div>
        <City cityId="Q3324394" />
        <City2 cityId="Q2114279" />
        <City cityId="R196002" />
      </div>
    </div>
  );
};

const Montreal = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Canada" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5 "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
      </div>{" "}
      <div>
        <City cityId="W20168831" />
        <City2 cityId="N1330276952" />
        <City cityId="Q16508755" />
      </div>
    </div>
  );
};

const ThunderBay = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Canada" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5 "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
      </div>{" "}
      <div>
        <City cityId="N5117185631" />
        <City2 cityId="Q23653064" />
        <City cityId="Q877280" />
      </div>
    </div>
  );
};
const Winnipeg = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <div className=" ml-2 mt-12">
          <Link to="/Canada" className="relative z-40">
            <button
              className="  flex  rounded-full p-4 bg-slate-200 "
              type="button"
            >
              <img
                className=" rotate-180 w-5 h-5 "
                src={nextForward}
                alt="forward"
              />
            </button>
          </Link>
        </div>
      </div>{" "}
      <div>
        <City cityId="Q6750086" />
        <City2 cityId="N343302576" />
        <City cityId="W25273914" />
      </div>
    </div>
  );
};

export { Toronto, Ottawa, Quebec, Montreal, ThunderBay, Winnipeg };

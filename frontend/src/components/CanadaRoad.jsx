import City from "./VisitCity";
import City2 from "./VisitCity2";

const Toronto = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="N4816874223" />
        <City2 cityId="Q4284139" />
        <City cityId="W4942687" />
      </div>
    </>
  );
};
const Ottawa = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W68588608" />
        <City2 cityId="N4568910828" />
        <City cityId="W223069822" />
      </div>
    </>
  );
};

const Quebec = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="Q3324394" />
        <City2 cityId="Q2114279" />
        <City cityId="R196002" />
      </div>
    </>
  );
};

const Montreal = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W20168831" />
        <City2 cityId="N1330276952" />
        <City cityId="Q16508755" />
      </div>
    </>
  );
};

const ThunderBay = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="N5117185631" />
        <City2 cityId="Q23653064" />
        <City cityId="Q877280" />
      </div>
    </>
  );
};
const Winnipeg = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="Q6750086" />
        <City2 cityId="N343302576" />
        <City cityId="W25273914" />
      </div>
    </>
  );
};

export { Toronto, Ottawa, Quebec, Montreal, ThunderBay, Winnipeg };

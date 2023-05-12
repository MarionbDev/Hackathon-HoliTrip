import City from "./VisitCity";
import City2 from "./VisitCity2";

const Brisbane = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W4282955" />
        <City2 cityId="Q5883263" />
        <City cityId="W8036230" />
      </div>
    </>
  );
};
const Sydney = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W282238523" />
        <City2 cityId="W16599528" />
        <City cityId="R2030042" />
      </div>
    </>
  );
};

const Canberra = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W11305622" />
        <City2 cityId="R2840634" />
        <City cityId="N2169745707" />
      </div>
    </>
  );
};

const Melbourne = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="N6362846387" />
        <City2 cityId="R6592679" />
        <City apiKey="5ae2e3f221c38a28845f05b6f386be0cdad7935fb4ef722b54e158e4" />
      </div>
    </>
  );
};
const Auburn = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="Q7568561" />
        <City2 cityId="Q5048317" />
        <City cityId="Q7084772" />
      </div>
    </>
  );
};

const Adelaide = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W679957023" />
        <City2 cityId="Q7603406" />
        <City cityId="N301928950" />
      </div>
    </>
  );
};

export { Brisbane, Sydney, Canberra, Melbourne, Adelaide, Auburn };

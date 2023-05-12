import City from "./VisitCity";
import City2 from "./VisitCity2";

const JuizDeFora = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W118932658" />
        <City2 cityId="W340728232" />
        <City cityId="N2872769149" />
      </div>
    </>
  );
};

const Petropolis = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="R1947508" />
        <City2 cityId="R11490013" />
        <City cityId="N4271176767" />
      </div>
    </>
  );
};

const Rio = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="R6904053" />
        <City2
          cityId="N339537737"
          apiKey="5ae2e3f221c38a28845f05b6f386be0cdad7935fb4ef722b54e158e4"
        />
        <City cityId="Q1864964" />
      </div>
    </>
  );
};
const SaoPaulo = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W40790349" />
        <City2 cityId="R9734636" />
        <City cityId="W75488634" />
      </div>
    </>
  );
};
const Curitiba = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="Q65969534" />
        <City2 cityId="Q10347012" />
        <City cityId="W544884528" />
      </div>
    </>
  );
};

const PortoAlegre = () => {
  return (
    <>
      <header className="h-72 -mt-8 bg-slate-500 mb-8" />
      <div>
        <City cityId="W203585141" />
        <City2 cityId="N2076714067" />
        <City cityId="W206611684" />
      </div>
    </>
  );
};

export { Rio, SaoPaulo, Curitiba, PortoAlegre, Petropolis, JuizDeFora };

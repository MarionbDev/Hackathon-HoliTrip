import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Canada from "@pages/Canada";
import Australia from "@pages/Australia";
import Brazil from "@pages/Brazil";
import Header from "@components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Footer.css";
import "./components/loading.css";
import RadioRoad from "./components/RadioRoad";
import {
  Toronto,
  Ottawa,
  Quebec,
  Montreal,
  ThunderBay,
  Winnipeg,
} from "./components/CanadaRoad";
import {
  Brisbane,
  Sydney,
  Canberra,
  Melbourne,
  Auburn,
  Adelaide,
} from "./components/AustraliaRoad";
import {
  Rio,
  SaoPaulo,
  Curitiba,
  PortoAlegre,
  Petropolis,
  JuizDeFora,
} from "./components/BrazilRoad";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/canada" element={<Canada />} />
            <Route path="/canada/toronto" element={<Toronto />} />
            <Route path="/canada/ottawa" element={<Ottawa />} />
            <Route path="/canada/montréal" element={<Montreal />} />
            <Route path="/canada/quebec" element={<Quebec />} />
            <Route path="/canada/thunder-bay" element={<ThunderBay />} />
            <Route path="/canada/winnipeg" element={<Winnipeg />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/australia/brisbane" element={<Brisbane />} />
            <Route path="/australia/sydney" element={<Sydney />} />
            <Route path="/australia/canberra" element={<Canberra />} />
            <Route path="/australia/melbourne" element={<Melbourne />} />
            <Route path="/australia/auburn" element={<Auburn />} />
            <Route path="/australia/adelaide" element={<Adelaide />} />
            <Route path="/brazil" element={<Brazil />} />
            <Route path="/brazil/rio" element={<Rio />} />
            <Route path="/brazil/sao_paulo" element={<SaoPaulo />} />
            <Route path="/brazil/curitiba" element={<Curitiba />} />
            <Route path="/brazil/porto_alegre" element={<PortoAlegre />} />
            <Route path="/brazil/petropolis" element={<Petropolis />} />
            <Route path="/brazil/juiz_de_fora" element={<JuizDeFora />} />
            <Route path="/radio" element={<RadioRoad />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}
export default App;

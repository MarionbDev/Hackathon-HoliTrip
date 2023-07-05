import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Canada from "@pages/Canada";
import Australia from "@pages/Australia";
import Brazil from "@pages/Brazil";
import Header from "@components/Header";
import SearchCity from "@pages/Search";
import ContactForm from "@pages/ContactForm";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Header1.css";
import "./components/Footer.css";
import "./components/loading.css";
import RadioRoad from "./pages/RadioRoad";
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
            <Route path="/Canada" element={<Canada />} />
            <Route path="/Canada/Toronto" element={<Toronto />} />
            <Route path="/Canada/Ottawa" element={<Ottawa />} />
            <Route path="/Canada/Montréal" element={<Montreal />} />
            <Route path="/Canada/Quebec" element={<Quebec />} />
            <Route path="/Canada/Thunder-bay" element={<ThunderBay />} />
            <Route path="/Canada/Winnipeg" element={<Winnipeg />} />
            <Route path="/Australia" element={<Australia />} />
            <Route path="/Australia/Brisbane" element={<Brisbane />} />
            <Route path="/Australia/Sydney" element={<Sydney />} />
            <Route path="/Australia/Canberra" element={<Canberra />} />
            <Route path="/Australia/Melbourne" element={<Melbourne />} />
            <Route path="/Australia/Auburn" element={<Auburn />} />
            <Route path="/Australia/Adelaide" element={<Adelaide />} />
            <Route path="/Brazil" element={<Brazil />} />
            <Route path="/Brazil/Rio" element={<Rio />} />
            <Route path="/Brazil/Sao-paulo" element={<SaoPaulo />} />
            <Route path="/Brazil/Curitiba" element={<Curitiba />} />
            <Route path="/Brazil/Porto-alegre" element={<PortoAlegre />} />
            <Route path="/Brazil/Petropolis" element={<Petropolis />} />
            <Route path="/Brazil/Juiz-de-fora" element={<JuizDeFora />} />
            <Route path="/radio" element={<RadioRoad />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/search" element={<SearchCity />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}
export default App;

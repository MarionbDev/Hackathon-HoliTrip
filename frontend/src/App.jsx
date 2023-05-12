import { Routes, Route } from "react-router-dom";
import Quebec from "./components/Quebec";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canada/" element={<Quebec />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}
export default App;

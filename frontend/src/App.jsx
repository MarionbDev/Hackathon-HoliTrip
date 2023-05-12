import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Canada from "@pages/Canada";
import Quebec from "./components/Quebec";
import "./App.css";

function App() {
  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/canada/quebec" element={<Quebec />} />
        </Routes>
      </div>
    </main>
  );
}
export default App;

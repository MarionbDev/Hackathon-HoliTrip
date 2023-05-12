import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Quebec from "./components/Quebec";

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
    </main>
  );
}

export default App;

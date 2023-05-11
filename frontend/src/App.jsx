import { Routes, Route } from "react-router-dom";
import Quebec from "./components/Quebec";

import "./App.css";

function App() {
  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/canada/quebec" element={<Quebec />} />
          {/* <Route path="/canada/toronto" element={<Toronto />} /> */}
        </Routes>
      </div>
    </main>
  );
}

export default App;

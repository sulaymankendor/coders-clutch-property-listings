import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Agents from "./components/pages/Agents";

function App() {
  return (
    <section>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
      </Routes>
    </section>
  );
}

export default App;

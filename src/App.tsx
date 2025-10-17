import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Agents from "./components/pages/Agents";
import PropertyDetails from "./components/pages/PropertyDetails";
import AgentDetails from "./components/pages/AgentDetails";

function App() {
  return (
    <section>
      <Header />

      <section className="mt-32 mb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agent/:id" element={<AgentDetails />} />
        </Routes>
      </section>
    </section>
  );
}

export default App;

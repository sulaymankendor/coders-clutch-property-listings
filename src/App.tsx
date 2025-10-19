import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Agents from "./components/pages/Agents";
import PropertyDetails from "./components/pages/PropertyDetails";
import AgentDetails from "./components/pages/AgentDetails";
import AboutUs from "./components/pages/AboutUs";
import SignIn from "./components/pages/SignIn";
import { ProtectedRoutes } from "./components/reusables/ProtectedRoutes";
import { PublicRoutes } from "./components/reusables/PublicRoutes";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <section>
      <section className="mt-32 mb-20">
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/sign-in" element={<SignIn />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agent/:id" element={<AgentDetails />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </section>
    </section>
  );
}

export default App;

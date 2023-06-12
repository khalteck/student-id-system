import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import "./output.css";

const Homepage = lazy(() => import("./pages/Homepage"));
const Card = lazy(() => import("./pages/Card"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}

export default App;

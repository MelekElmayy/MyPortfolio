import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Games from "./pages/Games";

import AcademicProjects from "./components/AcademicProjects ";
import PersonalProjects from "./components/PersonalProjects ";

import RestauranDelivery from "./components/RestauranDelivery";
import GameZone from "./components/GameZone";
import ReactNativeProject from "./components/ReactNativeProject";

import CompfyStore from "./components/CompfyStore";
import ChatIO from "./components/ChatIO";
import Bankist from "./components/Bankist";
import CartRedux from "./components/CartRedux";

import Learning from "./components/Learning";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<About />} />
        <Route path="/games" element={<Games />} />

        <Route path="/projects/academic" element={<AcademicProjects />} />
        <Route path="/projects/personal" element={<PersonalProjects />} />

        <Route
          path="/projects/restaurant-delivery"
          element={<RestauranDelivery />}
        />
        <Route path="/projects/game-zone" element={<GameZone />} />
        <Route path="/projects/Sponsofy" element={<ReactNativeProject />} />

        <Route path="/projects/chat-io" element={<ChatIO />} />
        <Route path="/projects/bankist" element={<Bankist />} />
        <Route path="/projects/compfy-store" element={<CompfyStore />} />
        <Route path="/projects/redux-cart" element={<CartRedux />} />

        <Route path="/projects/learning" element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;

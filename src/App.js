import Header from "./Components/Header";
import Content from "./Components/content";
import Api from "./Components/Api";
import LandPage from "./Components/LandPage";
import Calendar from "./Components/Calendar";
import MapComponent from "./Components/Map";
import Income from "./Components/Income";
import Login from "./Components/Login";
import AboutPage from "./Components/AboutPage";
import "./index.css";
import "./images/image2.png";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route
          path="/Content"
          element={
            <Content
              Api={Api}
              Income={Income}
              Map={MapComponent}
              Calendar={Calendar}
            />
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

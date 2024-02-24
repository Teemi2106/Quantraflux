import Header from "./Components/Header";
import Content from "./Components/content";
import Api from "./Components/Api";
import Calendar from "./Components/Calendar";
import MapComponent from "./Components/Map";
import Income from "./Components/Income";
import "./index.css";
import "./images/image2.png";
import Footer from "./Components/Footer";
import CarouselComponent from "./Components/CarouselComponent";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content
        Api={Api}
        Income={Income}
        Map={MapComponent}
        Calendar={Calendar}
      />
      <Footer />
    </div>
  );
}

export default App;

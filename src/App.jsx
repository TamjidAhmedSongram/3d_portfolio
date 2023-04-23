import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./components";
import "animate.css";

const App = () => {
  return <BrowserRouter>
    <div className=" relative z-10 bg-primary ">
      <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero /> 
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className=" relative z-0">
        <Contact />
        <StarsCanvas/>
      </div>

    </div>
  </BrowserRouter>;
};

export default App;

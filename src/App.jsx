import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./component/Benefits";
import Collaboration from "./component/Collaboration";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

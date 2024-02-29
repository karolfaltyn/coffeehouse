import { Navbar } from "./parts/Navbar";
import { Hero } from "./parts/Hero";
import { AboutUs } from "./parts/AboutUs";
import { Menu } from "./parts/Menu";

export const App = () => {
  return (
    <>
      <Navbar />
      <main className="scroll-container">
        <Hero />
        <AboutUs />
        <Menu />
      </main>
    </>
  );
};

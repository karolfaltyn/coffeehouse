import { Navbar } from "../parts/Navbar";
import { Hero } from "../parts/Hero";
import { AboutUs } from "../parts/AboutUs";
import { CoffeeTypes } from "../parts/CoffeeTypes";
import { Reviews } from "../parts/Reviews";
import { Contact } from "../parts/Contact";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="scroll-container">
        <Hero />
        <AboutUs />
        <CoffeeTypes />
        <Reviews />
        <Contact />
      </main>
    </>
  );
};

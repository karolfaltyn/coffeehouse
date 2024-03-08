import { Navbar } from "../parts/Navbar";
import { Hero } from "../parts/Hero";
import { Info } from "../parts/Info";
import { CoffeeTypes } from "../parts/CoffeeTypes";
import { Contact } from "../parts/Contact";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="scroll-container">
        <Hero />
        <Info />
        <CoffeeTypes />
        <Contact />
      </main>
    </>
  );
};

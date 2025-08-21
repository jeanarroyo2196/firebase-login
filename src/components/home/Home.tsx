import { Hero } from "../shared/hero/Hero";
import { Navbar } from "../shared/navbar/Navbar";

export const Home = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </main>
  );
};

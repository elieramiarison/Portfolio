import About from "./components/about";
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import Skils from "./components/skils";
import Projects from "./components/projects";
import MouseFollower from "./components/MouseFollower";
import Footer from "./components/footer";
import Review from "./components/review";
import Contact from "./components/contact";
import Disclaimer from "./components/disclaimer";

export default function Home() {
  return (
    <div>
      {/* <MouseFollower /> */}
      <Navbar />
      <HomePage />
      <About />
      <Skils />
      <Projects />
      <Contact />
      <Review />
      <Disclaimer />
      <Footer />
    </div>
  );
}

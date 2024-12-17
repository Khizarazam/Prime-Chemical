import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./LocoStyle.css";

const App = () => {
  const scrollRef = useRef(null); 

  useEffect(() => {
   
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
      smartphone: {
        smooth: true,
        breakpoint: 767, 
      },
      tablet: {
        smooth: true,
        breakpoint: 1024, 
      },
      lerp: 0.1, 
      reloadOnContextChange: true, 
    });

    const handleRouteChange = () => {
      scroll.update();
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      scroll.destroy();
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div data-scroll-section className="fixed text-black top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>

      <main data-scroll-container ref={scrollRef} className="text-black selection:bg-blue-400 bg-[#fffaf5]">
        <div data-scroll-section>
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;

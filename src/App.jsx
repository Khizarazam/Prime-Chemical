import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./LocoStyle.css";
import gsap from "gsap";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 2,
      smartphone: {
        smooth: true,
        multiplier: 10,
      },
      tablet: {
        smooth: true,
        multiplier: 10,
      },
    });

    const handleRouteChange = () => {
      scroll.update();
    };

    window.addEventListener("popstate", handleRouteChange);

    const handleMouseMove = (e) => {
      gsap.to("#cursor", {
        x: e.clientX + 9,
        y: e.clientY + 30,
        duration: 0.8,
        ease: "Power2.to",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      scroll.destroy();
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        className="w-4 h-4 hidden lg:block rounded-full bg-white fixed z-[999]"
      ></div>
      <div
        data-scroll-section
        className="fixed text-white top-0 left-0 right-0 z-[100]"
      >
        <Navbar />
      </div>
      <main
        data-scroll-container
        data-scroll-speed="1"
        ref={scrollRef}
        className="text-white selection:bg-blue-400 bg-zinc-800"
      >
        <div data-scroll-section data-scroll-speed="2">
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;

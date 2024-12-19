import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.to("#page2 h1", {
      x: "-150%",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        markers: true,
        pin: true
      }
    });
  }, []);

  return (
    <>
      <div id="page1"></div>
      <div id="page2">
        <h1>CHEMICALS</h1>
      </div>
      <div id="page3"></div>
    </>
  );
};

export default ScrollAnimation;

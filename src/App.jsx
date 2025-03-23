import { About } from "./About.jsx";
import { Footer } from "./Footer.jsx";
import { Hero } from "./Hero.jsx";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useRef } from "react";
// Register the GSAP React Plugin
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  // // UseRef
  const Juicy = useRef();
  const triggerStart = useRef();
  // // Gesap is like useEffect
  useGSAP(() => {
    console.log(Juicy.current);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerStart.current,
        start: "top bottom",
        end: "bottom bottom",
        //top of the trigger(div) touche the bottom of the viewport
        scrub: true,
      },
    });
    // Bottle
    tl.to(
      Juicy.current,
      {
        width: "30%",
        top: "120%",
        left: "60%",
        rotate: "-30deg",
      },
      "orange"
    ); // <-- automatically reverted
    tl.to(
      "#leaf",
      {
        top: "158%",
        rotate: "-0deg",
        left: "75%",
        width: "12%",
      },
      "orange"
    );

    tl.to(
      "#blackberry1",
      {
        top: "114%",
        rotate: "100deg",
        left: "5%",
        width: "5%",
      },
      "orange"
    );

    tl.to(
      "#blackberry2",
      {
        top: "125%",
        rotate: "100deg",
        left: "83%",
        width: "12%",
      },
      "orange"
    );
    tl.to(
      "#blackberry3",
      {
        top: "163%",
        rotate: "60deg",
        left: "70%",
        width: "5%",
      },
      "orange"
    );
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl2.to(
      "#cans",
      {
        top: "198%",
        left: "35%",
        width: "30%",
        rotate: "0deg",
      },
      "orange"
    );
  }, {});
  return (
    <div className="">
      <>
        <Hero Juicy={Juicy} />
        <About triggerStart={triggerStart} />
        <Footer />
      </>
    </div>
  );
};

export default App;

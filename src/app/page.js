"use client";
import React, { useEffect } from "react";

import { Homepage } from './(pages)/index'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
  }, []);
  return (
    <main>    
        <Homepage />
    </main>
  )
}

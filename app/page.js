"use client"
import { useEffect } from "react";
// path 
import About from "./componets/About/About";
import Footer from "./componets/Footer/Footer";
import Hero from "./componets/Hero/Hero";
import Navbar from "./componets/Navbar/Navbar";
import Project from "./componets/Project/Project";
import Skills from "./componets/Skills/Skills";
import Technology from "./componets/Technology/Technology";
import styles from "./page.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Icon from "./componets/Icon";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Project />
      <Technology />
      <Skills />
      <About />
      <Footer />
      <Icon />
    </main>
  );
}

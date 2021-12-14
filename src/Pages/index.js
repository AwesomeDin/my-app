import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import InfoSection from "../Components/InfoSection";
import ModifiedInfoSection from "../Components/InfoSection/modifiedindex";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../Components/InfoSection/Data";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import VerticalTimeline1 from "../Components/TimeLine/VerticalTimeline1";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ModifiedInfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      {/* <InfoSection {...homeObjThree} /> */}
      <VerticalTimeline1 />
      <Footer />
    </>
  );
};

export default Home;

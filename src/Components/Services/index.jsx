import React from "react";
import Icon1 from "../Services/personalwebsite.PNG";
// import Icon1 from "../InfoSection/random.jpg";
import Icon2 from "./stocks.jpg";
import Icon3 from "./DSML.png";
import Chip from "@mui/material/Chip";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services" style={{}}>
      <ServicesH1> Featured Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          href="//www.github.com/AwesomeDin/my-app"
          target="_blank"
          aria-label="Personal Website"
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Personal Website</ServicesH2>
          <ServicesP>The site you are looking at right now!</ServicesP>
          <ServicesP>
            <Chip label="React" /> <Chip label="HTML" /> <Chip label="CSS" />
          </ServicesP>
          <ServicesP>
            <Chip label="JavaScript" />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Stock User</ServicesH2>
          <ServicesP>Web Application for checking your daily stocks.</ServicesP>
          <ServicesP>
            <Chip label="JavaScript" /> <Chip label="HTML" />
            <Chip label="Python" />
          </ServicesP>
        </ServicesCard>
        <ServicesCard
          href="https://github.com/AwesomeDin/Data-Science-and-Machine-Learning-Projects"
          target="_blank"
          aria-label="Personal Website"
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>Data Sci and Machine Learning</ServicesH2>
          <ServicesP>Various charts and models </ServicesP>
          <ServicesP>
            <Chip label="Python" />
            <Chip label="Tensorflow" />
            <Chip label="Pandas" />
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

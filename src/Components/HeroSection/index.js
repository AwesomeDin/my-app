import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  // ArrowForward,
  // ArrowRight,
} from "./HeroElements";
// import { Button } from "../ButtonElement";
import Video from "./video.mp4";
import { SocialIconLink, SocialIcons } from "../Footer/FooterElements.js";
import { FaLinkedin, FaGithub, FaRegFilePdf } from "react-icons/fa";

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Rithvik Dinesh</HeroH1>
        <HeroP>Computer Science B.S 24' and Business Minor 24'</HeroP>
        <HeroBtnWrapper>
          <SocialIcons>
            <SocialIconLink
              href="//www.github.com/awesomedin"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="//www.linkedin.com/in/rithvikdinesh/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="//www.github.com/AwesomeDin/PDFRes/blob/main/RithvikDineshResume.pdf"
              target="_blank"
              aria-label="Resume"
            >
              <FaRegFilePdf />
            </SocialIconLink>
          </SocialIcons>
          {/* <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="signup"
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="signup"
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  // FooterLinksContainer,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  // FooterLinksWrapper,
  SocialMedia,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>More Info</FooterLinkTitle>
              <FooterLink to="/signin">First</FooterLink>
              <FooterLink to="/signin">Second</FooterLink>
              <FooterLink to="/signin">Third</FooterLink>
              <FooterLink to="/signin">Fourth</FooterLink>
              <FooterLink to="/signin">Fifth</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>More Info</FooterLinkTitle>
              <FooterLink to="/signin">First</FooterLink>
              <FooterLink to="/signin">Second</FooterLink>
              <FooterLink to="/signin">Third</FooterLink>
              <FooterLink to="/signin">Fourth</FooterLink>
              <FooterLink to="/signin">Fifth</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>More Info</FooterLinkTitle>
              <FooterLink to="/signin">First</FooterLink>
              <FooterLink to="/signin">Second</FooterLink>
              <FooterLink to="/signin">Third</FooterLink>
              <FooterLink to="/signin">Fourth</FooterLink>
              <FooterLink to="/signin">Fifth</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>More Info</FooterLinkTitle>
              <FooterLink to="/signin">First</FooterLink>
              <FooterLink to="/signin">Second</FooterLink>
              <FooterLink to="/signin">Third</FooterLink>
              <FooterLink to="/signin">Fourth</FooterLink>
              <FooterLink to="/signin">Fifth</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              RithvikDinesh
            </SocialLogo>
            <WebsiteRights>
              RithvikDinesh © {new Date().getFullYear()}
            </WebsiteRights>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

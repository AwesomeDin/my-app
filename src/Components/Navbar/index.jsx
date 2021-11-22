import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./rithvikdineshlogo3.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLnk,
} from "./NavbarElements";

const index = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="Logo" width="100px" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="coursework">CourseWork</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="timeline">TimeLine</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLnk to="/contactme">Contact Me</NavBtnLnk>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;

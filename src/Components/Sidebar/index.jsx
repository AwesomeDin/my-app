import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarWrapper,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElement";

const index = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="coursework" onClick={toggle}>
            CourseWork
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="timeline" onClick={toggle}>
            TimeLine
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contactme">Contact Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default index;

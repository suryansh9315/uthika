import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_svg_2-cropped.svg";
import { Search } from "@styled-icons/bootstrap";
import { textIntro } from "./animate";

// Implement search
// Complete NavList
// Make Navbar Responsive

const Navbar = () => {
  const navListRef = useRef();
  const navIconRef = useRef();
  useEffect(() => {
    textIntro([navListRef, navIconRef]);
  }, []);

  return (
    <NavbarWrapper>
      <Container>
        <NavLeft>
          <LogoContainer ref={navIconRef}>
            <img src={Logo} alt="" height="75px" />
          </LogoContainer>
        </NavLeft>
        <NavRight>
          <NavList ref={navListRef}>
            <NavListItem>Home</NavListItem>
            <NavListItem>About</NavListItem>
            <NavListItem>Our Expertise</NavListItem>
            <NavListItem>Units</NavListItem>
            <NavListItem>Gallery</NavListItem>
            <NavListItem>Carrier</NavListItem>
            <NavListItem>News</NavListItem>
            <NavListItem>Contact</NavListItem>
            <NavSearch>
              <Search height="20px" color="#004AAD" />
            </NavSearch>
          </NavList>
        </NavRight>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  background-color: #e6ecfe;
  padding: 10px 5vw;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLeft = styled.div``;
const NavRight = styled.div``;
const NavSearch = styled.div`
  cursor: pointer;
  position: relative;
  top: -4px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;
const LogoContainer = styled.div`
  cursor: pointer;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: clamp(30px, 1.5vw, 50px);
  font-size: 17px;
`;
const NavListItem = styled.li`
  text-decoration: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.2s ease;
  padding: 0px 2px;
  color: #0000;
  font-weight: 500;
  background: linear-gradient(90deg, #004aad 50%, #000 0) var(--_p, 100%) / 200%
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: all 0.4s;

  &:hover {
    --_p: 0%;
  }
`;

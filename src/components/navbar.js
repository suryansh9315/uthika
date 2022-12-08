import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_svg_2-cropped.svg";
import { Search } from "@styled-icons/bootstrap";
import { textIntro } from "./animate";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import { Menu } from "@styled-icons/heroicons-outline";
import { Close } from "@styled-icons/evil";

// To-Do
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
          <LogoContainer ref={navIconRef} />
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
            <NavSearchClose>
              <Close height="35px" color="#004AAD" />
            </NavSearchClose>
            <HamBurger>
              <Menu height="35px" color="#004AAD" />
            </HamBurger>
            <HamBurgerClose>
              <CloseOutline height="40px" color="#004AAD" />
            </HamBurgerClose>
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
  display: flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;
const NavSearchClose = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  display: none;

  &:hover {
    transform: scale(1.15);
  }
`;
const LogoContainer = styled.div`
  cursor: pointer;
  background: url(${Logo});
  height: 75px;
  width: 230px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    height: 65px;
    width: 180px;
  }
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: clamp(30px, 1.5vw, 50px);
  font-size: 17px;
`;
const HamBurger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  display: none;

  &:hover {
    transform: scale(1.15);
  }

  @media screen and (max-width: 1200px) {
    display: inline-block;
  }
`;
const HamBurgerClose = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  display: none;

  &:hover {
    transform: scale(1.15);
  }
`;
const NavListItem = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.2s ease;
  padding: 0px 0px;
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

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

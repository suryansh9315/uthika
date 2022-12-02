import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_svg_2-cropped.svg";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavLeft>
          <LogoContainer>
            <img src={Logo} alt="" height="75px" />
          </LogoContainer>
        </NavLeft>
        <NavRight>
          <NavList>
            <NavListItem>Home</NavListItem>
            <NavListItem>About</NavListItem>
            <NavListItem>Our Expertise</NavListItem>
            <NavListItem>Units</NavListItem>
            <NavListItem>Gallery</NavListItem>
            <NavListItem>Carrier</NavListItem>
            <NavListItem>News</NavListItem>
            <NavListItem>Contact</NavListItem>
          </NavList>
        </NavRight>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  background-color: #e6ecfe;
  padding: 15px 5vw;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLeft = styled.div``;
const NavRight = styled.div``;
const LogoContainer = styled.div`
  cursor: pointer;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: clamp(35px, 2vw, 50px);
  font-size: 17px;
`;
const NavListItem = styled.li`
  text-decoration: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.2s ease;
  padding: 0px 2px;
  color: #0000;
  background: linear-gradient(90deg, #004AAD 50%, #000 0) var(--_p, 100%) / 200% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: all 0.5s;

  &:hover {
    --_p: 0%;
  }
`;

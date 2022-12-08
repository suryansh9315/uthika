import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo_svg_2-cropped.svg";
import { Copyright } from "@styled-icons/boxicons-regular";
import { FacebookSquare } from "@styled-icons/fa-brands";
import { Instagram } from "@styled-icons/bootstrap";
import { Youtube } from "@styled-icons/fa-brands";
import { Twitter } from "@styled-icons/bootstrap";

// To-Do
// Make Footer Responsive
// Add HyperLinks
// Add Animations

const Footer = () => {
  return (
    <Container>
      <ContainerOne>
        <ContainerLeft>
          <LogoContainer />
        </ContainerLeft>
        <ContainerRight>
          <ContainerRightOne>CONTACT INFO</ContainerRightOne>
          <ContainerRightTwo>
            <ContainerRightTwoList>
              <ContainerRightTwoListItem>
                Phone: +91 11 4751 1000 / 6904 1000
              </ContainerRightTwoListItem>
              <ContainerRightTwoListItem>
                Mobile: +91 94570 30181
              </ContainerRightTwoListItem>
              <ContainerRightTwoListItem>
                Email: uthikalab@gmail.com
              </ContainerRightTwoListItem>
              <ContainerRightTwoListItem>
                Web: www.uthikalab.com
              </ContainerRightTwoListItem>
            </ContainerRightTwoList>
          </ContainerRightTwo>
          <ContainerRightThree>
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TwitterIcon />
          </ContainerRightThree>
        </ContainerRight>
      </ContainerOne>
      <ContainerTwo>
        <CopyrightIcon />
        <FooterDesc>Copyright 2022 Uthika | All rights Reserved</FooterDesc>
      </ContainerTwo>
    </Container>
  );
};

export default Footer;

const Container = styled.div``;
const ContainerOne = styled.div`
  width: 100vw;
  background-color: #c7cdd4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vw 0px;
`;
const ContainerLeft = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoContainer = styled.div`
  cursor: pointer;
  background: url(${Logo});
  height: 200px;
  width: 330px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    height: 65px;
    width: 180px;
  }
`;
const ContainerRight = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContainerRightOne = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #004aad;
  padding: 0px 20px;
`;
const ContainerRightTwo = styled.div`
  padding: 0px 20px;
`;
const ContainerRightTwoList = styled.ul`
  list-style: none;
`;
const ContainerRightTwoListItem = styled.li`
  text-decoration: none;
`;
const ContainerRightThree = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 20px;
`;
const FacebookIcon = styled(FacebookSquare)`
  height: 25px;
  color: #004aad;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;
const InstagramIcon = styled(Instagram)`
  height: 25px;
  color: #004aad;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;
const YoutubeIcon = styled(Youtube)`
  height: 25px;
  color: #004aad;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;
const TwitterIcon = styled(Twitter)`
  height: 25px;
  color: #004aad;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;
const ContainerTwo = styled.div`
  width: 100vw;
  height: 50px;
  padding: 0px 40px;
  background-color: #5d7287;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const FooterDesc = styled.div`
  color: #c7cdd4;
  font-size: 13px;
`;
const CopyrightIcon = styled(Copyright)`
  height: 22px;
  color: #c7cdd4;
`;

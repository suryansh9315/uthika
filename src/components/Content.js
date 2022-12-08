import React, { useRef, useEffect } from "react";
import Lab from "../assets/images/lab.jpeg";
import { textIntro2, titleIntro, descIntro } from "../components/animate";
import styled from "styled-components";

// To-Do
// Make Responsive

const Content = () => {
  const div1Ref = useRef();
  const div2Ref = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  useEffect(() => {
    textIntro2([div1Ref, div2Ref]);
    titleIntro([titleRef]);
    descIntro([descRef]);
  }, []);
  return (
    <ContentContainer>
      <Div1 ref={div1Ref} />
      <Div2 ref={div2Ref} />
      <Div3>
        <Title ref={titleRef}>SIMPLY FOR BETTER LIFE</Title>
        <Description ref={descRef}>
          UTHIKA manufacturers 140.00 million tablets in a day. 21.00 million
          hard gelatin capsules in a day. 4.50 million soft gelatin capsules in
          a day
        </Description>
      </Div3>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vw 4vw;
  position: relative;
`;
const Div1 = styled.div`
  height: 32vw;
  width: 30vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Lab});
`;
const Div2 = styled.div`
  background-color: #e6ecfe;
  height: 25vw;
  width: 80vw;
  position: absolute;
  z-index: -1;
`;
const Div3 = styled.div`
  flex: 0.55;
  padding: 0px 5vw;
`;
const Title = styled.div`
  font-size: 1.8rem;
  font-family: "Concert One", cursive;
  margin-bottom: 15px;
`;
const Description = styled.div`
  font-size: 1rem;
  font-family: "Mali", cursive;
  text-align: justify;
`;

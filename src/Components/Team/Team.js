import { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const TeamSection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #48ae6c;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
  width: auto;
  height: 130px;
  margin-top: 8%;
`;

const TeamIntroductionDiv = styled.div`
  display: block;
  position: relative;
  width: 80%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 9%;
  margin-bottom: 18%;

  @media (max-width: 1280px){
    width: 90%;
  }
  @media (max-width: 980px){
    width: 95%;
  }
  @media (max-width: 760px){
    width: 110%;
    margin-top: 15%;
    margin-left: -5%;
  }
`;

const TeamBookImg = styled.img`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
`;

const fadeUpKeyframes = keyframes`
  0%{
    margin-top: 2%;
    opacity: 0;
  }
  100%{
    margin-top: 0%;
    opacity: 1;
  }
`;

// Teammate 상단

const Teammate1Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 0.2s;

  top: 7.5%;
  left: 1%;
  transform: rotate(-14deg);
  z-index: 5;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate2Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 0.4s;

  top: -2%;
  left: 19%;
  transform: rotate(6deg);
  z-index: 4;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate3Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 0.6s;

  top: 8%;
  left: 36.5%;
  transform: rotate(15deg);
  z-index: 3;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate4Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 0.8s;

  top: -1%;
  left: 55%;
  transform: rotate(-9deg);
  z-index: 2;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate5Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 1.0s;

  top: 5%;
  left: 73%;
  transform: rotate(6deg);
  z-index: 3;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

// Teammate 하단

const Teammate6Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 1.2s;

  top: 48.5%;
  left: 3%;
  transform: rotate(8deg);
  z-index: 2;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate7Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 1.4s;

  top: 44.5%;
  left: 21.7%;
  transform: rotate(-11deg);
  z-index: 1;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate8Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 1.6s;

  top: 47.5%;
  left: 42.25%;
  transform: rotate(-3deg);
  z-index: 3;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate9Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 1.8s;

  top: 43.5%;
  left: 58.95%;
  transform: rotate(12deg);
  z-index: 2;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const Teammate10Img = styled.img`
  position: absolute;
  display: none;
  width: 20%;
  transition: all 0.3s ease-in-out;
  animation: ${fadeUpKeyframes} 2.0s;

  top: 50%;
  left: 76%;
  transform: rotate(-9deg);
  z-index: 1;

  &:hover {
    transform: scale(1.2);
    z-index: 7;
  }
`;

const TeamSticker1Img = styled.img`
  position: absolute;
  height: 11%;
  left: 4%;
  top: 11%;
  transition: transform 0.3s ease-in-out;
  transition-delay: 0s;
  z-index: 2;

  &:hover {
    transform:scale(1.1) !important;
  }
`;

const TeamSticker2Img = styled.img`
  position: absolute;
  height: 11%;
  right: 7.42%;
  top: 43%;
  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;
  transform: rotate(42deg) !important;
  z-index: 6;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1280px){
    right: 2%;
  }
  @media (max-width: 980px){
    height: 9%;
    right: 1%;
    top: 47%;
  }
  @media (max-width: 760px){
    display: none;
  }
`;

function Team() {
  const teamSection = useRef();
  const titleImg = useRef();
  const teammate1 = useRef();
  const teammate2 = useRef();
  const teammate3 = useRef();
  const teammate4 = useRef();
  const teammate5 = useRef();
  const teammate6 = useRef();
  const teammate7 = useRef();
  const teammate8 = useRef();
  const teammate9 = useRef();
  const teammate10 = useRef();

  const [teammateDisplay, setTeammateDisplay] = useState('none');

  const teammateScrollEvent = useCallback(() => {
    const teamSectionTop = teamSection.current.offsetTop;
    const titleImgTop = titleImg.current.offsetTop;
    if (window.scrollY >= (teamSectionTop + titleImgTop)){
      setTeammateDisplay('block');
      for(let i = 0; i < 10; i++){
        const teammates = [teammate1, teammate2, teammate3, teammate4, teammate5, teammate6, teammate7, teammate8, teammate9, teammate10]
        teammates[i].current.style.display = teammateDisplay;
      }
    }
  }, [teammateDisplay]);

  useEffect(() => {
    window.addEventListener("scroll", teammateScrollEvent);
    return () => {
      window.removeEventListener("scroll", teammateScrollEvent);
    }
  }, [teammateScrollEvent]);

  return (
    <TeamSection ref={teamSection}>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg ref={titleImg} src="images/team/title.png" />
      </div>
      <TeamIntroductionDiv className="rainbow">
        <TeamBookImg src="images/team/book.png" />
        {/* Teammate 상단 */}
        <Teammate1Img ref={teammate1} src="images/team/teammate_rainbow.png" />
        <Teammate2Img ref={teammate2} src="images/team/teammate_sunny.png" />
        <Teammate3Img ref={teammate3} src="images/team/teammate_wind.png" />
        <Teammate4Img ref={teammate4} src="images/team/teammate_cloud.png" />
        <Teammate5Img ref={teammate5} src="images/team/teammate_sunset.png" />
        {/* Teammate 하단 */}
        <Teammate6Img ref={teammate6} src="images/team/teammate_rain.png" />
        <Teammate7Img ref={teammate7} src="images/team/teammate_thunder.png" />
        <Teammate8Img ref={teammate8} src="images/team/teammate_night.png" />
        <Teammate9Img ref={teammate9} src="images/team/teammate_aurora.png" />
        <Teammate10Img ref={teammate10} src="images/team/teammate_spring.png" />
      </TeamIntroductionDiv>
      <TeamSticker1Img src="images/team/spring-sticker-1.png" data-aos="zoom-in" data-aos-duration="500" />
      <TeamSticker2Img src="images/team/spring-sticker-2.png" data-aos="zoom-in" data-aos-duration="500" />
    </TeamSection>
  );
}

export default Team;
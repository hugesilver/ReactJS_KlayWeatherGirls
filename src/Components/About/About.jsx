import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css, keyframes } from "styled-components";
import './About.css';

const AboutSection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #a7d0ec;
  overflow: hidden;

  @media (max-width: 890px){
    height: 1670px;
  }
  @media (max-width: 820px){
    height: 1700px;
  }
  @media (max-width: 510px){
    height: 1450px;
  }
  @media (max-width: 430px){
    height: 1310px;
  }
`;

const TitleImg = styled.img`
  position: relative;
  display: block;
  margin-top: 13.75%;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  width: 38%;
  top: 0;
  left: 0;
  transform: none !important;

  @media (max-width: 980px){
    height: 120px;
  }
  @media (max-width: 890px){
    margin-top: 18%;
    width: 75%;
  }
  @media (max-width: 820px){
    position: absolute;
    margin-top: 0;
    top: 9.5%;
    left: 50%;
    transform: translate(-50%, 0) !important;
  }
  @media (max-width: 760px){
    height: 100px;
  }
  @media (max-width: 620px){
    height: 85px;
  }
  @media (max-width: 600px){
    width: 85%;
  }
  @media (max-width: 470px){
    height: 75px;
  }
`;

const BackgroundPC = styled.img`
  width: 100%;
  position: fixed;
  top: 0px;
  background-size: cover;
`;

const BackgroundMobile = styled.img`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  transform: none;
  background-size: cover;

  @media (max-width: 750px){
    width: 130%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  @media (max-width: 450px){
    width: 150%;
  }
  @media (max-width: 385px){
    width: 170%;
  }
`;

const Background = () => {
  return useMediaQuery({ maxWidth: 850 }) ? 
  <BackgroundMobile src="images/about/background-mobile.png" /> :
  <BackgroundPC src="images/about/background.png"  />
}

const BackgroundObjectImg = styled.img`
  display: inline;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 850px){
    display: none;
  }
`;

const EarthGlobeDiv = styled.div`
  position: relative;
  margin-top: -5.75%;
  left: 0;
  transform: none;
  top: 0;
  width: auto;

  @media (max-width: 890px){
    position: absolute;
    margin-top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    top: 15%;
    width: 150%;
  }
  @media (max-width: 820px){
    width: 168%;
  }
  @media (max-width: 750px){
    top: 10%;
  }
  @media (max-width: 510px){
    width: 130%;
  }
`;

const EarthGlobeImgPC = styled.img`
  width: 100%;
  height: auto;
`

const EarthGlobeImgMobile = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  height: 1470px;

  @media (max-width: 850px){
    height: 1580px;
  }
  @media (max-width: 760px){
    height: 1760px;
  }
  @media (max-width: 510px){
    height: 1370px;
  }
`

const EarthGlobeImg = () => {
return useMediaQuery({ maxWidth: 890 }) ? 
  <EarthGlobeImgMobile src="images/about/earth-globe-main-mobile.png" /> :
  <EarthGlobeImgPC src="images/about/earth-globe-main.png" />
}

const RandomBalloon = ["sun", "rain", "cloud", "thunder", "snow"];

/* 외부 CSS로 처리할 수 있지만 미래의 나를 위해... */

const BalloonKeyframes = keyframes`
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
`;

const BalloonZoomInUp = css`
  ${BalloonKeyframes} 1s;
`;

const WeatherBalloon = styled.img`
  display: none;
  position: absolute;
  width: 5.72916666667%;
  height: auto;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  animation: ${BalloonZoomInUp}
  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 890px){
    display: none;
  }
`;

const DescriptionDiv = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  transform: none;
  top: 49%;
  text-align: center;

  @media (max-width: 890px){
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    top: 52%;
  }
  @media (max-width: 510px){
    top: 53%;
  }
  @media (max-width: 430px){
    top: 54%;
  }
`;

const DescriptionBigP = styled.p`
  font-family: 'Goyang';
  font-size: 36pt;
  font-weight: bold;
  margin-bottom: 1.15em;

  @media (max-width: 1280px){
    font-size: 32pt;
  }
  @media (max-width: 890px){
    font-size: 22pt;
  }
  @media (max-width: 510px){
    margin-bottom: 0.5em;
  }
`;

const DescriptionP = styled.p`
  font-family: 'GoyangIlsan';
  font-size: 18pt;
  color: #000000;
  line-height: 42pt;

  @media (max-width: 1280px){
    font-size: 14pt;
  }
  @media (max-width: 890px){
    font-size: 11pt;
    line-height: 28pt;
  }
  @media (max-width: 430px){
    font-size: 10pt;
  }
  @media (max-width: 420px){
    font-size: 9pt;
  }
`;

const BuyOnOpenseaButton = styled.button`
  font-family:'yg-jalnan';
  margin-top: 100px;
  padding:25px 45px;
  border-radius: 40px;
  border: 2px solid #4260c2;
  background: #6388ff;
  background: linear-gradient(to bottom, #6388ff 0%, #6783e0 100%);
  box-shadow: 0px 4px 10px 0px rgba(74,62,43,0.3);

  color: #ffffff;
  font-weight: bold;
  font-size: 16pt;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1080px){
    margin-top: 150px;
    font-size: 14pt;
  }
  @media (max-width: 760px){
    margin-top: 110px;
  }
`;

const About = ( props, ref ) => {
  const [balloonDisplay, setBalloonDisplay] = useState('none');
  const EarthGlobeDivTop = useRef(null);

  const Balloon0 = useRef(null);
  const Balloon500 = useRef(null);
  const Balloon1000 = useRef(null);
  const Balloon1500 = useRef(null);
  const Balloon2000 = useRef(null);

  const balloonScrollEvent = useCallback(() => {
    const {offsetTop} = EarthGlobeDivTop.current;
    if (window.scrollY >= offsetTop && window.innerWidth >= 890){
      setBalloonDisplay('inline');
      setTimeout(() => {Balloon0.current.style.display = balloonDisplay;}, 0);
      setTimeout(() => {Balloon500.current.style.display = balloonDisplay;}, 500);
      setTimeout(() => {Balloon1000.current.style.display = balloonDisplay;}, 1000);
      setTimeout(() => {Balloon1500.current.style.display = balloonDisplay;}, 1500);
      setTimeout(() => {Balloon2000.current.style.display = balloonDisplay;}, 2000);
    }
  }, [balloonDisplay]);

  useEffect(() => {
    window.addEventListener("scroll", balloonScrollEvent);
    return () => {
      window.removeEventListener("scroll", balloonScrollEvent);
    }
  }, [balloonScrollEvent]);

  return (
    <AboutSection>
      <TitleImg src="images/about/title.png" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" />
      <Background />
      <div>
        <BackgroundObjectImg src="images/about/background_objects/yellowstar_left.png" style={{width: "2.5%", height: "auto", top: "10%", left: "7%"}} />
        <BackgroundObjectImg src="images/about/background_objects/starsign_left.png" style={{width: "4.63541666667%", height: "auto", top: "17.75%", left: "24.75%"}} />
        <BackgroundObjectImg src="images/about/background_objects/starsign_right.png" style={{width: "10.83%", height: "auto", top: "5.25%", right: "13.25%"}} />
        <BackgroundObjectImg className="floating" src="images/about/background_objects/moon.png" style={{width: "6.302083%", height: "auto", top: "17.7%", right: "20%"}} />
        <BackgroundObjectImg className="floating" src="images/about/background_objects/planet.png" style={{width: "14.739583%", height: "auto", top: "26.7%", left: "10.7%", animationDelay: "0.5s"}} />
        <BackgroundObjectImg src="images/about/background_objects/yellowstar_right.png" style={{width: "3.90625%", height: "auto", top: "30%", right: "15.5%"}} />
      </div>
      <EarthGlobeDiv ref={ref}>
        <div ref={EarthGlobeDivTop}>
        <EarthGlobeImg />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} ref={Balloon0} style={{top: "33%", left: "17%"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} ref={Balloon1000} style={{top: "62%", left: "27%"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} ref={Balloon2000} style={{bottom: "16%", left: "15%"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} ref={Balloon500} style={{top: "35.5%", right: "17.5%"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} ref={Balloon1500} style={{top: "63%", right: "3%"}} />
        </div>
      </EarthGlobeDiv>
      <DescriptionDiv>
        <DescriptionBigP>“지구에 가보자!”</DescriptionBigP>
        <br />
        <DescriptionP className="descriptionP">
          WeatherGirls는 5000명의 호기심 많고 귀여운 소녀들로 다양한 날씨와 관련된 특성으로 구성되어 있습니다.<br />
          Team WeatherGirls가 추구하는 가치는 누구나 즐길 수 있는 편안한 커뮤니티와 Klaytn 생태계 확장,<br />
          재미있는 콘텐츠를 통해 사람들을 하나로 모으는 것입니다.
        </DescriptionP>
        <BuyOnOpenseaButton className="rainbow" onClick={() => window.open('about:blank').location.href='https://opensea.io/collection/klayweathergirls'}>Buy on Opensea</BuyOnOpenseaButton>
      </DescriptionDiv>
    </AboutSection>
  );
}

export default forwardRef(About);
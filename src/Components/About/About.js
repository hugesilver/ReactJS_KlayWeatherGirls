import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Waypoint } from "react-waypoint";
import styled, { css, keyframes } from "styled-components";
import './About.css';

function About() {
  const isMax1280 = useMediaQuery({ maxWidth: 1280 });
  const isMax1080 = useMediaQuery({ maxWidth: 1080 });
  const isMax890 = useMediaQuery({ maxWidth: 890 });
  const isMax850 = useMediaQuery({ maxWidth: 850 });
  const isMax820 = useMediaQuery({ maxWidth: 820 });
  const isMax760 = useMediaQuery({ maxWidth: 760 });
  const isMax750 = useMediaQuery({ maxWidth: 750 });
  const isMax600 = useMediaQuery({ maxWidth: 600 });
  const isMax510 = useMediaQuery({ maxWidth: 510 });
  const isMax430 = useMediaQuery({ maxWidth: 430 });
  const isMax420 = useMediaQuery({ maxWidth: 420 });

  const AboutDiv = styled.div`
    position: relative;
    display: block;
    height: ${isMax430 ? '1310px' : isMax510 ? '1450px' : isMax820 ? '1700px' : isMax890 ? '1670px' : 'auto'};
    background: #a7d0ec;
    overflow: hidden;
  `;

  const TitleImg = styled.img`
    position: ${isMax820 ? 'absolute' : 'relative'};
    display: block;
    margin-top: ${isMax820 ? '0' : isMax890 ? '18%' : '13.75%' };
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
    width: ${isMax600 ? '85%' : isMax890 ? '75%' : '38%'};
    top: ${isMax820 ? '9.5%' : '0'};
    left: ${isMax820 ? '50%' : '0'};
    transform: ${isMax820 ? 'translate(-50%, 0)' : 'none'} !important;
  `;

  const BackgroundPC = styled.img`
    width: 100%;
    position: fixed;
    top: 0px;
    background-size: cover;
  `;

  const BackgroundMobile = styled.img`
    width: ${isMax420 ? '150%' : isMax750 ? '130%' : '100%'};
    position: fixed;
    top: 0px;
    left: ${isMax750 ? '50%' : '0'};
    transform: ${isMax750 ? 'translate(-50%, 0)' : 'none'};
    background-size: cover;
  `;

  const Background = () => {
    return useMediaQuery({ maxWidth: 850 }) ? 
    <BackgroundMobile src="images/about/background-mobile.png" /> :
    <BackgroundPC src="images/about/background.png"  />
  }

  const BackgroundObjectImg = styled.img`
    display: ${isMax850 ? 'none' : 'inline'};
    position: absolute;
    transition: all 0.3s ease-in-out;
    z-index: 2;
    
    &:hover {
      transform: scale(1.2);
    }
  `;

  const EarthGlobeDiv = styled.div`
    position: ${isMax890 ? 'absolute' : 'relative'};
    margin-top: ${isMax890 ? '0%' : '-5.75%'};
    left: ${isMax890 ? '50%' : '0'};
    transform: ${isMax890 ? 'translate(-50%, 0)' : 'none'};
    top: ${isMax750 ? '10%' : isMax890 ? '15%' : '0'};
    width: ${isMax510 ? '130%' : isMax760 ? '172%' : isMax820 ? '168%' : isMax890 ? '150%' : 'auto'};
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
    height: ${isMax510 ? '1370px' : isMax760 ? '1760px' : isMax850 ? '1580px' : '1470px'};
  `

  const EarthGlobeImg = () => {
    return useMediaQuery({ maxWidth: 890 }) ? 
    <EarthGlobeImgMobile src="images/about/earth-globe-main-mobile.png" /> :
    <EarthGlobeImgPC src="images/about/earth-globe-main.png" />
  }

  const RandomBalloon = ["sun", "rain", "cloud", "thunder", "snow"];
  const [balloonDisplay, setBalloonDisplay] = useState('none');

  const BalloonKeyframes = keyframes`
    
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
    display: ${isMax890 ? 'none' : balloonDisplay};
    position: absolute;
    width: 5.72916666667%;
    height: auto;
    transition: all 0.3s ease-in-out;
    z-index: 2;
    animation: ${BalloonZoomInUp}
    &:hover {
      transform: scale(1.15);
    }
  `;

  const DescriptionDiv = styled.div`
    width: ${isMax890 ? '90%' : '100%'};
    position: absolute;
    left: ${isMax890 ? '50%' : '0'};
    transform: ${isMax890 ? 'translate(-50%, 0)' : 'none'};
    top: ${isMax430 ? '54%' : isMax510 ? '53%' : isMax890 ? '52%' : '49%'};
    text-align: center;
  `;

  const DescriptionBigP = styled.p`
    font-family: 'Goyang';
    font-size: ${isMax890 ? '22pt' : isMax1280 ? '32pt' : '36pt'};
    font-weight:bold;
    margin-bottom:${isMax510 ? '0.5em' : '1.15em'};
  `;

  const DescriptionP = styled.p`
    font-family: 'GoyangIlsan';
    font-size: ${isMax420 ? '9pt' : isMax430 ? '10pt' : isMax890 ? '11pt' : isMax1280 ? '14pt' : '18pt'};
    color: #000000;
    line-height: ${isMax890 ? '28pt' : '42pt'};
  `;

  const BuyOnOpenseaButton = styled.button`
    margin-top: ${isMax760 ? '110px' : isMax1080 ? '150px' : '100px'};
    padding:25px 45px;
    border-radius: 40px;
    border: 2px solid #4260c2;
    background: #6388ff;
    background: -moz-linear-gradient(top, #6388ff 0%, #6783e0 100%);
    background: -webkit-linear-gradient(top, #6388ff 0%, #6783e0 100%);
    background: linear-gradient(to bottom, #6388ff 0%, #6783e0 100%);
    -webkit-box-shadow: 0px 4px 10px 0px rgba(74,62,43,0.3); 
    box-shadow: 0px 4px 10px 0px rgba(74,62,43,0.3);

    color: #ffffff;
    font-weight: bold;
    font-size: ${isMax1080 ? '14pt' : '16pt'};
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <AboutDiv>
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
      <EarthGlobeDiv>
        <EarthGlobeImg />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} style={{top: "33%", left: "17%", animationDelay: "0s"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} style={{top: "62%", left: "27%", animationDelay: "1s"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} style={{bottom: "16%", left: "15%", animationDelay: "2s"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} style={{top: "35.5%", right: "17.5%", animationDelay: "0.5s"}} />
          <WeatherBalloon src={`images/about/balloon/balloon_${RandomBalloon[Math.floor(Math.random() * RandomBalloon.length)]}.png`} style={{top: "63%", right: "3%", animationDelay: "1.5s"}} />
      </EarthGlobeDiv>
      <DescriptionDiv>
        <DescriptionBigP>“지구에 가보자!”</DescriptionBigP>
        <br />
        <DescriptionP>
          WeatherGirls는 5000명의 호기심 많고 귀여운 소녀들로 다양한 날씨와 관련된 특성으로 구성되어 있습니다.<br />
          Team WeatherGirls가 추구하는 가치는 누구나 즐길 수 있는 편안한 커뮤니티와 Klaytn 생태계 확장,<br />
          재미있는 콘텐츠를 통해 사람들을 하나로 모으는 것입니다.
        </DescriptionP>
        <Waypoint onEnter={() => {setBalloonDisplay('inline');}}></Waypoint>
        <BuyOnOpenseaButton className="rainbow">Buy on Opensea</BuyOnOpenseaButton>
      </DescriptionDiv>
    </AboutDiv>
  );
}

export default About;
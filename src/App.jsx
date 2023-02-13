import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import './Common/Svg-style.css';
import './Common/Cursor.css';
import Nav from './Components/Nav/Nav';
import NavMobile from './Components/Nav/NavMobile';
import About from './Components/About/About';
import Story from './Components/Story/Story';
import Gallery from './Components/Gallery/Gallery';
import Roadmap from './Components/Roadmap/Roadmap';
import Trailer from './Components/Trailer/Trailer';
import Team from './Components/Team/Team';
import Partners from './Components/Partners/Partners';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import TopButton from './Components/TopButton/TopButton';

const BridgeSection = styled.section`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const BridgeImg = styled.img`
  width: 100%;
  height: auto;
`;

function App() {
  // AOS 초기화
  useEffect(() => {
    AOS.init();
  });

  // Navigator 스크롤 위치에 따른 변화
  const EarthGlobeDivTop = useRef(null);

  const [navPos, setNavPos] = useState('absolute');
  const [navBG, setNavBG] = useState('transparent');
  const [navColor, setNavColor] = useState('#ffffff');
  const [navAni, setNavAni] = useState('none');

  const [topButtonDisplay, setTopButtonDisplay] = useState('none');

  const Navigator = () => {
    return useMediaQuery({ maxWidth: 850 }) ? 
    <NavMobile 
      position={navPos} 
      background={navBG} 
      section0={sectionStoryTop} 
      section1={sectionGalleryTop} 
      section2={sectionRoadmapTop} 
      section3={sectionTeamTop} 
      section4={sectionFAQTop} 
    /> :
    <Nav 
      position={navPos} 
      background={navBG} 
      color={navColor} 
      animation={navAni} 
      section0={sectionStoryTop} 
      section1={sectionGalleryTop} 
      section2={sectionRoadmapTop} 
      section3={sectionTeamTop} 
      section4={sectionFAQTop} 
    />
  }

  const aboutScrollEvent = useCallback(() => {
    const { offsetTop } = EarthGlobeDivTop.current;
    if (window.scrollY >= offsetTop){
      setNavPos('fixed');
      setNavBG('#ffb8c2');
      setNavColor('#000000');
      setNavAni(true);

      setTopButtonDisplay('block');
    }
    else {
      setNavPos('absolute');
      setNavBG('transparent');
      setNavColor('#ffffff');
      setNavAni(false);

      setTopButtonDisplay('none');
    }
  }, [setNavPos, setNavBG, setNavColor, setNavAni, setTopButtonDisplay]);

  useEffect(() => {
    window.addEventListener("scroll", aboutScrollEvent);
    return () => {
      window.removeEventListener("scroll", aboutScrollEvent);
    }
  }, [aboutScrollEvent]);

  // Navigator 섹션 이동

  const sectionStory = useRef(null);
  const sectionGallery = useRef(null);
  const sectionRoadmap = useRef(null);
  const sectionTeam = useRef(null);
  const sectionFAQ = useRef(null);

  const [sectionStoryTop, setSectionStoryTop] = useState(null);
  const [sectionGalleryTop, setSectionGalleryTop] = useState(null);
  const [sectionRoadmapTop, setSectionRoadmapTop] = useState(null);
  const [sectionTeamTop, setSectionTeamTop] = useState(null);
  const [sectionFAQTop, setSectionFAQTop] = useState(null);

  const setOffsetTop = useCallback(() => {
    const elementStory = sectionStory.current;
    if(elementStory) {
      setSectionStoryTop(elementStory.offsetTop);
    }

    const elementGallery = sectionGallery.current;
    if(elementGallery) {
      setSectionGalleryTop(elementGallery.offsetTop);
    }

    const elementRoadmap = sectionRoadmap.current;
    if(elementRoadmap) {
      setSectionRoadmapTop(elementRoadmap.offsetTop);
    }

    const elementTeam = sectionTeam.current;
    if(elementTeam) {
      setSectionTeamTop(elementTeam.offsetTop);
    }

    const elementFAQ = sectionFAQ.current;
    if(elementFAQ) {
      setSectionFAQTop(elementFAQ.offsetTop);
    }
  }, [setSectionStoryTop, setSectionGalleryTop, setSectionRoadmapTop, setSectionTeamTop, setSectionFAQTop]);

  useEffect(() => {
    window.addEventListener("load", setOffsetTop);
    return () => {
      window.removeEventListener("load", setOffsetTop);
    }
  }, [setOffsetTop]);

  return (
    <div className="App">
      <Navigator />
      <About ref={EarthGlobeDivTop}/>
      <Story ref={sectionStory} />
      <Gallery ref={sectionGallery} />
      <BridgeSection><BridgeImg src="images/bridge/bridge_gallery.png" /></BridgeSection>
      <Roadmap ref={sectionRoadmap} />
      <Trailer />
      <BridgeSection style={{background: "#48ae6c"}}><BridgeImg src="images/bridge/bridge_trailer.png" /></BridgeSection>
      <Team ref={sectionTeam} />
      <Partners />
      <BridgeSection style={{background: "#ffffff"}}><BridgeImg src="images/bridge/bridge_partners.png" /></BridgeSection>
      <FAQ ref={sectionFAQ} />
      <Footer />
      <TopButton display={topButtonDisplay} />
    </div>
  );
}

export default App;

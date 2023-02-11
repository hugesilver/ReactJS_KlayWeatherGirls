import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import styled from 'styled-components';
import './Common/Svg-style.css';
import './Common/Cursor.css';
import Nav from './Components/Nav/Nav';
import NavMobile from './Components/Nav/NavMobile';
import About from './Components/About/About';
import { useMediaQuery } from 'react-responsive';
import TopButton from './Components/TopButton/TopButton';
import Story from './Components/Story/Story';
import Gallery from './Components/Gallery/Gallery';
import Roadmap from './Components/Roadmap/Roadmap';
import Trailer from './Components/Trailer/Trailer';
import Team from './Components/Team/Team';
import Partners from './Components/Partners/Partners';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';

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
  useEffect(() => {
    AOS.init();
  });

  const [navPos, setNavPos] = useState('absolute');
  const [navBG, setNavBG] = useState('transparent');
  const [navColor, setNavColor] = useState('#ffffff');
  const [navAni, setNavAni] = useState('none');

  const [topButtonDisplay, setTopButtonDisplay] = useState('none');

  const Navigator = () => {
    return useMediaQuery({ maxWidth: 850 }) ? <NavMobile position={navPos} background={navBG} /> : <Nav position={navPos} background={navBG} color={navColor} animation={navAni} />
  }

  const EarthGlobeDivTop = useRef(null);

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


  return (
    <div className="App">
      <Navigator />
      <About EarthGlobeDiv={EarthGlobeDivTop}/>
      <Story />
      <Gallery />
      <BridgeSection><BridgeImg src="images/bridge/bridge_gallery.png" /></BridgeSection>
      <Roadmap />
      <Trailer />
      <BridgeSection style={{background: "#48ae6c"}}><BridgeImg src="images/bridge/bridge_trailer.png" /></BridgeSection>
      <Team />
      <Partners />
      <BridgeSection style={{background: "#ffffff"}}><BridgeImg src="images/bridge/bridge_partners.png" /></BridgeSection>
      <FAQ />
      <Footer />
      <TopButton display={topButtonDisplay} />
    </div>
  );
}

export default App;

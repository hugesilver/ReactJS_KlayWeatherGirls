import { useEffect, useState } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import './Components/_Common/Svg-style.css';
import './Components/_Common/Cursor.css';
import Nav from './Components/Nav/Nav';
import NavMobile from './Components/Nav/NavMobile';
import About from './Components/About/About';
import { useMediaQuery } from 'react-responsive';
import { Waypoint } from 'react-waypoint';
import TopButton from './Components/TopButton/TopButton';

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

  return (
    <div className="App">
      <Navigator />
      <About />
      <Waypoint
          onEnter={() => {
            setNavPos('fixed');
            setNavBG('#ffb8c2');
            setNavColor('#000000');
            setNavAni(true);

            setTopButtonDisplay('block');
          }}
          onLeave={() => {
            setNavPos('absolute');
            setNavBG('transparent');
            setNavColor('#ffffff');
            setNavAni(false);

            setTopButtonDisplay('none');
          }}
        >  
      </Waypoint>
      <TopButton display={topButtonDisplay} />
    </div>
  );
}

export default App;

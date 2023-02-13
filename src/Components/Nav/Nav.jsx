import styled, { css, keyframes } from "styled-components";

const NavKeyFrames = keyframes`
  0%{
    top:-80px;
  }
  100%{
    top:0px;
  }
`;

const NavAnimation = css`
  ${NavKeyFrames} 0.3s;
`

const NavDiv = styled.nav`
  position: ${(props) => props.position};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  animation: ${(props) => props.animation === true ? NavAnimation : 'none'};
  top:0;
  z-index:99;
  width:100%;
  height:80px;  
`;

const LogoSvg = styled.svg`
  width:auto;
  height:55px;
  position:absolute;
  top:50%;
  transform:translate(0,-50%);
  left: 2%;
  enable-background:new 0 0 833.25 392.83;
`;

const NavCenterUl = styled.ul`
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  display: flex;
  gap: 40px;
  flex-direction: row;
  font-weight: bold;

  @media (max-width: 980px){
    gap: 30px;
  }
`;

const NavCenterLi = styled.li`
  text-align: center;
`;

const NavCenterSpan = styled.span`
  color: #ffffff;
  font-size: 12pt;
  &:hover{
    color:#467dad;
  }

  @media (max-width: 870px){
    font-size: 11pt;
  }
`;

const NavRightDiv = styled.div`
  position:absolute;
  top:50%;
  right:2%;
  transform:translateY(-50%);
  display: flex;
  flex-direction: row;
  gap: 19px;
`;

const NavRightIcon = styled.svg`
  width:25px;
  height:25px;
  enable-background:new 0 0 64 64;
`;

function Nav( props ) {
  return (
    <NavDiv position={props.position} background={props.background} color={props.color} animation={props.animation}>
      <LogoSvg onClick={() => {window.scroll({top: 0, behavior: 'smooth'})}} className="logo rainbow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 833.25 392.83">
        <g className="sunrise_x5F_layer">
          <line className="st0" x1="382.21" y1="26.83" x2="382.21" y2="43.54"/>
          <line className="st0" x1="422.78" y1="35.44" x2="414" y2="49.65"/>
          <line className="st0" x1="447.84" y1="63.02" x2="432.92" y2="70.56"/>
          <line className="st0" x1="339.23" y1="37.62" x2="349.97" y2="50.42"/>
          <line className="st0" x1="315.2" y1="66.96" x2="329.93" y2="74.85"/>
          <path id="sunrise" className="st0" d="M382.21,88.36c0,0,22.24,0.04,36.18,10.75c0-35.89-16.06-42.37-37.34-42.37c-22.29,0-37.27,9.99-39.19,44.36C341.86,101.1,355.17,85.48,382.21,88.36"/>
          </g>
          <g id="letter">
          <path className="st1" 
            d="M159.66,92.66c0,0-95.91-8.44-83.74,71.43c0,0,0.5,31.75,32.38,83.51c0,0-32.41,7.77-16.43,38.2l-56.29,19.78
            l98.89,9.13c0,0,92.61,107.32,139.01-18.95c0,0,91.61,142.67,154.62-8.43c0,0,26.62,69.93,146.72,66.94
            c0,0,93.57,5.32,127.96-85.12l87.97-11.48l-55.33-12.93c0,0,8.96-19.94-22.82-22.06c0,0,13.69-27.39-24.17-31.19l-33.32-2.12
            c0,0,30.87-30.59,8.05-73.95c0,0-16.77-34.11-82.29-34.11c0,0-134.51-16.1-145.16,106.95c0,0,29.67-107.64-65.42-99.46
            c0,0-63.02-6.35-41.08,127.46c0,0-9.51-65.07-69.6-64.96c0,0-52.5,6.46-67.86,68.61c0,0,14.16-34.48,4.63-83.21
            C196.36,136.68,189.26,96.39,159.66,92.66z"/>
          <path className="st2" d="M605.23,265.39c0,0-58.46,15.62-55.54-41.3c0,0-4.46-43.26,105.4-34.73"/>
        </g>
      </LogoSvg>
      <div>
        <NavCenterUl>
          <NavCenterLi className="rainbow" onClick={() => {window.scroll({top: props.section0, behavior: 'smooth'})}}><NavCenterSpan>STORY</NavCenterSpan></NavCenterLi>
          <NavCenterLi className="rainbow" onClick={() => {window.scroll({top: props.section1, behavior: 'smooth'})}}><NavCenterSpan>GALLERY</NavCenterSpan></NavCenterLi>
          <NavCenterLi className="rainbow" onClick={() => {window.scroll({top: props.section2, behavior: 'smooth'})}}><NavCenterSpan>ROADMAP</NavCenterSpan></NavCenterLi>
          <NavCenterLi className="rainbow" onClick={() => {window.scroll({top: props.section3, behavior: 'smooth'})}}><NavCenterSpan>TEAM</NavCenterSpan></NavCenterLi>
          <NavCenterLi className="rainbow" onClick={() => {window.scroll({top: props.section4, behavior: 'smooth'})}}><NavCenterSpan>FAQ</NavCenterSpan></NavCenterLi>
        </NavCenterUl>
      </div>
      <NavRightDiv>
        <NavRightIcon className="icon-opensea rainbow" onClick={() => window.open('about:blank').location.href='https://opensea.io/collection/klayweathergirls'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
        <path className="st0" d="M31.83-0.22C14.1-0.22-0.28,14.16-0.28,31.89S14.1,64,31.83,64s32.11-14.38,32.11-32.11S49.57-0.22,31.83-0.22z
        M15.56,32.97l0.14-0.22l8.35-13.07c0.12-0.19,0.41-0.17,0.5,0.04c1.4,3.13,2.6,7.02,2.04,9.44c-0.24,1-0.9,2.35-1.64,3.59
        c-0.1,0.18-0.2,0.36-0.31,0.53c-0.05,0.08-0.14,0.13-0.24,0.13H15.8C15.57,33.41,15.44,33.16,15.56,32.97z M52.79,37.46
        c0,0.12-0.07,0.22-0.18,0.27c-0.65,0.28-2.86,1.29-3.78,2.57c-2.35,3.27-4.14,7.94-8.16,7.94H23.94c-5.93,0-10.74-4.82-10.74-10.77
        v-0.19c0-0.16,0.13-0.29,0.29-0.29h9.33c0.18,0,0.32,0.17,0.3,0.35c-0.07,0.61,0.05,1.23,0.33,1.79c0.55,1.12,1.7,1.83,2.94,1.83
        h4.62v-3.61h-4.57c-0.23,0-0.37-0.27-0.24-0.46c0.05-0.08,0.11-0.16,0.16-0.24c0.43-0.61,1.05-1.57,1.66-2.65
        c0.42-0.73,0.82-1.51,1.15-2.3c0.07-0.14,0.12-0.29,0.17-0.43c0.09-0.25,0.18-0.48,0.25-0.72c0.07-0.2,0.12-0.41,0.17-0.6
        c0.16-0.67,0.22-1.37,0.22-2.1c0-0.29-0.01-0.59-0.04-0.87c-0.01-0.31-0.05-0.63-0.09-0.94c-0.03-0.28-0.08-0.55-0.13-0.84
        c-0.07-0.42-0.16-0.83-0.26-1.25l-0.04-0.16c-0.08-0.29-0.15-0.56-0.24-0.85c-0.26-0.9-0.56-1.78-0.88-2.6
        c-0.12-0.33-0.25-0.64-0.38-0.95c-0.19-0.47-0.39-0.9-0.57-1.31c-0.09-0.18-0.17-0.35-0.25-0.52c-0.09-0.19-0.18-0.39-0.27-0.57
        c-0.07-0.14-0.14-0.27-0.19-0.41l-0.56-1.04c-0.08-0.14,0.05-0.31,0.21-0.27l3.53,0.96h0.01c0.01,0,0.01,0,0.01,0l0.47,0.13
        l0.51,0.15l0.19,0.05v-2.1c0-1.01,0.81-1.83,1.81-1.83c0.5,0,0.96,0.2,1.28,0.54s0.53,0.79,0.53,1.3v3.11l0.38,0.11
        c0.03,0.01,0.06,0.02,0.09,0.04c0.09,0.07,0.22,0.17,0.39,0.3c0.13,0.11,0.27,0.23,0.45,0.37c0.34,0.27,0.75,0.63,1.19,1.03
        c0.12,0.1,0.23,0.21,0.34,0.31c0.57,0.53,1.22,1.16,1.83,1.85c0.17,0.19,0.34,0.39,0.51,0.6c0.17,0.21,0.35,0.42,0.51,0.63
        c0.21,0.28,0.43,0.56,0.63,0.86c0.09,0.14,0.2,0.29,0.29,0.43c0.25,0.38,0.47,0.77,0.68,1.16c0.09,0.18,0.18,0.38,0.26,0.57
        c0.23,0.52,0.42,1.06,0.54,1.59c0.04,0.12,0.06,0.24,0.08,0.35v0.03c0.04,0.16,0.05,0.33,0.07,0.5c0.05,0.55,0.03,1.1-0.09,1.65
        c-0.05,0.23-0.12,0.46-0.19,0.69c-0.08,0.22-0.16,0.46-0.26,0.68c-0.2,0.46-0.43,0.92-0.71,1.35c-0.09,0.16-0.19,0.33-0.3,0.48
        c-0.12,0.17-0.23,0.33-0.34,0.48c-0.15,0.2-0.3,0.41-0.46,0.59c-0.14,0.19-0.29,0.39-0.45,0.56c-0.22,0.26-0.43,0.51-0.65,0.75
        c-0.13,0.16-0.27,0.31-0.42,0.46c-0.14,0.16-0.29,0.3-0.42,0.43c-0.22,0.22-0.41,0.39-0.56,0.53l-0.36,0.33
        c-0.05,0.05-0.12,0.07-0.19,0.07h-2.81v3.61h3.54c0.79,0,1.54-0.28,2.15-0.8c0.21-0.18,1.12-0.97,2.19-2.15
        c0.04-0.04,0.08-0.07,0.14-0.08l9.77-2.82c0.18-0.05,0.37,0.09,0.37,0.28V37.46z"/>
        <path className="st1" d="M15.56,32.97l0.14-0.22l8.35-13.07c0.12-0.19,0.41-0.17,0.5,0.04c1.4,3.13,2.6,7.02,2.04,9.44
            c-0.24,1-0.9,2.35-1.64,3.59c-0.1,0.18-0.2,0.36-0.31,0.53c-0.05,0.08-0.14,0.13-0.24,0.13H15.8
            C15.57,33.41,15.44,33.16,15.56,32.97z"/>
        <path className="st1" d="M52.79,35.4v2.07c0,0.12-0.07,0.22-0.18,0.27c-0.65,0.28-2.86,1.29-3.78,2.57c-2.35,3.27-4.14,7.94-8.16,7.94
            H23.94c-5.93,0-10.74-4.82-10.74-10.77v-0.19c0-0.16,0.13-0.29,0.29-0.29h9.33c0.18,0,0.32,0.17,0.3,0.35
            c-0.07,0.61,0.05,1.23,0.33,1.79c0.55,1.12,1.7,1.83,2.94,1.83h4.62v-3.61h-4.57c-0.23,0-0.37-0.27-0.24-0.46
            c0.05-0.08,0.11-0.16,0.16-0.24c0.43-0.61,1.05-1.57,1.66-2.65c0.42-0.73,0.82-1.51,1.15-2.3c0.07-0.14,0.12-0.29,0.17-0.43
            c0.09-0.25,0.18-0.48,0.25-0.72c0.07-0.2,0.12-0.41,0.17-0.6c0.16-0.67,0.22-1.37,0.22-2.1c0-0.29-0.01-0.59-0.04-0.87
            c-0.01-0.31-0.05-0.63-0.09-0.94c-0.03-0.28-0.08-0.55-0.13-0.84c-0.07-0.42-0.16-0.83-0.26-1.25l-0.04-0.16
            c-0.08-0.29-0.15-0.56-0.24-0.85c-0.26-0.9-0.56-1.78-0.88-2.6c-0.12-0.33-0.25-0.64-0.38-0.95c-0.19-0.47-0.39-0.9-0.57-1.31
            c-0.09-0.18-0.17-0.35-0.25-0.52c-0.09-0.19-0.18-0.39-0.27-0.57c-0.07-0.14-0.14-0.27-0.19-0.41l-0.56-1.04
            c-0.08-0.14,0.05-0.31,0.21-0.27l3.53,0.96h0.01c0.01,0,0.01,0,0.01,0l0.47,0.13l0.51,0.15l0.19,0.05v-2.1
            c0-1.01,0.81-1.83,1.81-1.83c0.5,0,0.96,0.2,1.28,0.54c0.33,0.33,0.53,0.79,0.53,1.3v3.11l0.38,0.11c0.03,0.01,0.06,0.02,0.09,0.04
            c0.09,0.07,0.22,0.17,0.39,0.3c0.13,0.11,0.27,0.23,0.45,0.37c0.34,0.27,0.75,0.63,1.19,1.03c0.12,0.1,0.23,0.21,0.34,0.31
            c0.57,0.53,1.22,1.16,1.83,1.85c0.17,0.19,0.34,0.39,0.51,0.6c0.17,0.21,0.35,0.42,0.51,0.63c0.21,0.28,0.43,0.56,0.63,0.86
            c0.09,0.14,0.2,0.29,0.29,0.43c0.25,0.38,0.47,0.77,0.68,1.16c0.09,0.18,0.18,0.38,0.26,0.57c0.23,0.52,0.42,1.06,0.54,1.59
            c0.04,0.12,0.06,0.24,0.08,0.35v0.03c0.04,0.16,0.05,0.33,0.07,0.5c0.05,0.55,0.03,1.1-0.09,1.65c-0.05,0.23-0.12,0.46-0.19,0.69
            c-0.08,0.22-0.16,0.46-0.26,0.68c-0.2,0.46-0.43,0.92-0.71,1.35c-0.09,0.16-0.19,0.33-0.3,0.48c-0.12,0.17-0.23,0.33-0.34,0.48
            c-0.15,0.2-0.3,0.41-0.46,0.59c-0.14,0.19-0.29,0.39-0.45,0.56c-0.22,0.26-0.43,0.51-0.65,0.75c-0.13,0.16-0.27,0.31-0.42,0.46
            c-0.14,0.16-0.29,0.3-0.42,0.43c-0.22,0.22-0.41,0.39-0.56,0.53l-0.36,0.33c-0.05,0.05-0.12,0.07-0.19,0.07h-2.81v3.61h3.54
            c0.79,0,1.54-0.28,2.15-0.8c0.21-0.18,1.12-0.97,2.19-2.15c0.04-0.04,0.08-0.07,0.14-0.08l9.77-2.82
            C52.61,35.07,52.79,35.2,52.79,35.4z"/>
        </NavRightIcon>
        <NavRightIcon className="icon-twitter rainbow" onClick={() => window.open('about:blank').location.href='https://twitter.com/WeatherGirlsNFT'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
        <path className="st0" d="M20.19,57.88c24.03,0,37.17-19.91,37.17-37.17c0-0.57-0.01-1.13-0.04-1.69
        c2.55-1.84,4.77-4.15,6.52-6.76c-2.34,1.04-4.86,1.74-7.5,2.06c2.7-1.62,4.77-4.18,5.74-7.23c-2.52,1.5-5.32,2.58-8.3,3.17
        c-2.38-2.54-5.78-4.13-9.54-4.13c-7.22,0-13.07,5.85-13.07,13.06c0,1.03,0.11,2.02,0.34,2.98C20.66,21.62,11.04,16.42,4.59,8.52
        c-1.12,1.93-1.77,4.17-1.77,6.57c0,4.53,2.31,8.53,5.81,10.87c-2.14-0.07-4.16-0.65-5.92-1.63c0,0.05,0,0.11,0,0.17
        c0,6.33,4.5,11.61,10.48,12.81c-1.1,0.3-2.25,0.46-3.44,0.46c-0.84,0-1.66-0.08-2.46-0.24c1.66,5.19,6.49,8.97,12.2,9.07
        c-4.47,3.5-10.1,5.59-16.23,5.59c-1.05,0-2.09-0.06-3.12-0.18C5.94,55.71,12.81,57.88,20.19,57.88"/>
        </NavRightIcon>
        <NavRightIcon className="icon-discord rainbow" onClick={() => window.open('about:blank').location.href='https://discord.com/invite/pczWPcS85h'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
        <path className="st0" d="M53.82,11.98c-4.01-1.84-8.32-3.2-12.82-3.98c-0.08-0.01-0.16,0.02-0.21,0.1c-0.55,0.98-1.17,2.27-1.6,3.28
        c-4.84-0.72-9.66-0.72-14.4,0c-0.43-1.03-1.06-2.29-1.62-3.28c-0.04-0.07-0.12-0.11-0.21-0.1c-4.5,0.77-8.8,2.13-12.82,3.98
        c-0.03,0.01-0.06,0.04-0.08,0.07c-8.16,12.2-10.4,24.09-9.3,35.84c0,0.06,0.04,0.11,0.08,0.15c5.39,3.96,10.6,6.36,15.72,7.95
        c0.08,0.03,0.17,0,0.22-0.07c1.21-1.65,2.29-3.4,3.22-5.23c0.05-0.11,0-0.23-0.11-0.28c-1.71-0.65-3.34-1.44-4.91-2.34
        c-0.12-0.07-0.13-0.25-0.02-0.33c0.33-0.25,0.66-0.5,0.98-0.76c0.06-0.05,0.14-0.06,0.2-0.03c10.31,4.71,21.46,4.71,31.65,0
        c0.07-0.03,0.15-0.02,0.21,0.03c0.32,0.26,0.65,0.52,0.98,0.77c0.11,0.08,0.11,0.26-0.02,0.33c-1.57,0.92-3.2,1.69-4.91,2.34
        c-0.11,0.04-0.16,0.17-0.11,0.28c0.95,1.83,2.03,3.58,3.21,5.23c0.05,0.07,0.14,0.1,0.22,0.07c5.15-1.59,10.36-3.99,15.75-7.95
        c0.05-0.03,0.08-0.09,0.08-0.14c1.31-13.58-2.2-25.38-9.31-35.84C53.89,12.02,53.86,11.99,53.82,11.98z M21.56,40.74
        c-3.1,0-5.66-2.85-5.66-6.35c0-3.5,2.51-6.35,5.66-6.35c3.18,0,5.71,2.87,5.66,6.35C27.22,37.89,24.71,40.74,21.56,40.74z
        M42.48,40.74c-3.1,0-5.66-2.85-5.66-6.35c0-3.5,2.51-6.35,5.66-6.35c3.18,0,5.71,2.87,5.66,6.35
        C48.14,37.89,45.66,40.74,42.48,40.74z"/>
        </NavRightIcon>
      </NavRightDiv>
    </NavDiv>
  );
}

export default Nav;

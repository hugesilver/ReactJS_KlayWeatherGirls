import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const FooterElement = styled.footer`
  height: 300px;
  background-color: #222222;
  position: relative;
  overflow: hidden;
`;

const IconsDiv = styled.div`
  position: relative;
  top: 10%;
`;

const IconsUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  @media (max-width: 690px){
    gap: 40px;
  }
  @media (max-width: 510px){
    gap: 30px;
  }
  @media (max-width: 370px){
    gap: 20px;
  }
`;

const IconsSvg = styled.svg`
  width: 40px;
  height: 40px;

  @media (max-width: 690px){
    width: 30px;
    height: 30px;
  }
  @media (max-width: 510px){
    width: 25px;
    height: 25px;
  }
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LogoSvg = styled.svg`
  width: 170px;
  height: auto;

  @media (max-width: 850px){
    .st1{
      fill: #a2d4ff;
    }
  }
`;

const CopyrightDiv = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, 0);
  text-align: center;
  color: #ffffff;

  @media (max-width: 600px){
    bottom: 12%;
  }
`;

const CopyrightP = styled.p`
  padding: 2px 0;
  font-size: 14pt;  

  @media (max-width: 600px){
    font-size: 14pt;
  }
  @media (max-width: 530px){
    font-size: 12pt;
  }
  @media (max-width: 430px){
    font-size: 10pt;
  }
`;

const MailSpan = styled.span`
  &:hover{
    text-decoration: underline;
  }
`;

const CopiedKeyframes = keyframes`
  0%{
    bottom: -50px;
  }
  10%{
    bottom: 50px;
  }
  90%{
    bottom: 50px;
  }
  100%{
    bottom: -50px;
  }
`;

const CopiedAnimation = css`
  ${CopiedKeyframes} 3s ease-out;
`;

const CopiedP = styled.p`
  position: fixed;
  font-family: 'NanumGothicBold';
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
  left: 50%;
  bottom: -50px;
  transform: translate(-50%, 0);
  word-spacing: 1.5pt;
  background-color: #ffffff;
  padding: 18px 50px;
  border-radius: 50px;
  z-index: 99;
  border: 2.5px solid #000;
  display: ${(props) => {
    if (props.copied){
      setTimeout(() => {return "block"}, 0);
      setTimeout(() => {return "none"}, 3000);
    } 
    else {
      return "none"
    }
  }};
  animation: ${(props) => props.copied ? CopiedAnimation : "none"};

  @media (max-width: 650px){
    font-size: 14pt;
  }
  @media (max-width: 570px){
    font-size: 13pt;
    padding: 14px 35px;
  }
  @media (max-width: 480px){
    font-size: 11pt;
    padding: 14px 30px;
  }
  @media (max-width: 420px){
    font-size: 10pt;
  }
  @media (max-width: 395px){
    padding: 14px 25px;
  }
  @media (max-width: 375px){
    font-size: 8.5pt;
  }
`;

const CopiedSvg = styled.svg`
  fill: #00b400;
  height: 18pt;
  margin-top: -3pt;
  margin-right: 10pt;
  enable-background: new 0 0 512 512;
  vertical-align: middle;

  @media (max-width: 650px){
    height: 14pt;
  }
  @media (max-width: 570px){
    height: 13pt;
    margin-right: 8pt;
  }
  @media (max-width: 480px){
    height: 11pt;
  }
  @media (max-width: 420px){
    height: 10pt;
    margin-right: 6pt;
  }
  @media (max-width: 375px){
    height: 8.5pt;
  }
`;

function Footer() {
  const [copied, setCopied] = useState(false);
  const Copy = () => {
    setCopied(true);
    if (navigator.clipboard) {
      navigator.clipboard.writeText("WeatherGirls0211@gmail.com").then(() => {}).catch(() => {alert('복사하는 도중 오류가 발생했습니다.')});
    }
    else{
      if (!document.queryCommandSupported("copy")) {
        return alert("죄송합니다.\n이 브라우저에서는 복사 기능을 지원하지 않습니다.");
      }
      const tempText = document.createElement('textarea');
      tempText.value = "WeatherGirls0211@gmail.com";
      document.body.appendChild(tempText);
      tempText.focus();
      tempText.select();
      document.execCommand("copy");
      document.body.removeChild(tempText);
    }
    setTimeout(() => {setCopied(false)}, 3000);
  }

  return (
    <FooterElement>
      <IconsDiv>
        <IconsUl>
          <li>
            <IconsSvg className="icon-opensea rainbow" onClick={() => window.open('about:blank').location.href='https://opensea.io/collection/klayweathergirls'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
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
            </IconsSvg>
          </li>
          <li>
            <IconsSvg className="icon-twitter rainbow" onClick={() => window.open('about:blank').location.href='https://twitter.com/WeatherGirlsNFT'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
              <path className="st0" d="M20.19,57.88c24.03,0,37.17-19.91,37.17-37.17c0-0.57-0.01-1.13-0.04-1.69
              c2.55-1.84,4.77-4.15,6.52-6.76c-2.34,1.04-4.86,1.74-7.5,2.06c2.7-1.62,4.77-4.18,5.74-7.23c-2.52,1.5-5.32,2.58-8.3,3.17
              c-2.38-2.54-5.78-4.13-9.54-4.13c-7.22,0-13.07,5.85-13.07,13.06c0,1.03,0.11,2.02,0.34,2.98C20.66,21.62,11.04,16.42,4.59,8.52
              c-1.12,1.93-1.77,4.17-1.77,6.57c0,4.53,2.31,8.53,5.81,10.87c-2.14-0.07-4.16-0.65-5.92-1.63c0,0.05,0,0.11,0,0.17
              c0,6.33,4.5,11.61,10.48,12.81c-1.1,0.3-2.25,0.46-3.44,0.46c-0.84,0-1.66-0.08-2.46-0.24c1.66,5.19,6.49,8.97,12.2,9.07
              c-4.47,3.5-10.1,5.59-16.23,5.59c-1.05,0-2.09-0.06-3.12-0.18C5.94,55.71,12.81,57.88,20.19,57.88"/>
            </IconsSvg>
          </li>
          <li>
            <IconsSvg className="icon-discord rainbow" onClick={() => window.open('about:blank').location.href='https://discord.com/invite/pczWPcS85h'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
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
            </IconsSvg>
          </li>
          <li>
            <IconsSvg className="icon-youtube rainbow" onClick={() => window.open('about:blank').location.href='https://www.youtube.com/channel/UCU7jA5XDiijAZgYIuOYonQw'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
              <path className="st0" d="M62.15,16.76c-0.72-2.72-2.86-4.87-5.56-5.6C51.68,9.83,32,9.83,32,9.83s-19.68,0-24.58,1.32
              c-2.71,0.73-4.84,2.87-5.56,5.6C0.54,21.7,0.54,32,0.54,32s0,10.3,1.31,15.24c0.72,2.72,2.86,4.87,5.56,5.6
              C12.32,54.17,32,54.17,32,54.17s19.68,0,24.58-1.32c2.71-0.73,4.84-2.87,5.56-5.6C63.46,42.3,63.46,32,63.46,32
              S63.46,21.7,62.15,16.76z M25.56,41.36V22.64L42.01,32L25.56,41.36z"/>
              <polygon className="st1" points="25.56,41.36 25.56,22.64 42.01,32 "/>
            </IconsSvg>
          </li>
          <li>
            <IconsSvg className="icon-instagram rainbow" onClick={() => window.open('about:blank').location.href='https://www.instagram.com/weathergirlsnft'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
              <g>
                <defs>
                  <path id="SVGID_1_" d="M32,8.09c7.79,0,8.71,0.03,11.79,0.17c2.84,0.13,4.39,0.6,5.42,1c1.36,0.53,2.33,1.16,3.35,2.18
                  c1.02,1.02,1.65,1.99,2.18,3.35c0.4,1.03,0.87,2.57,1,5.42c0.14,3.08,0.17,4,0.17,11.79s-0.03,8.71-0.17,11.79
                  c-0.13,2.84-0.6,4.39-1,5.42c-0.53,1.36-1.16,2.33-2.18,3.35c-1.02,1.02-1.99,1.65-3.35,2.18c-1.03,0.4-2.57,0.87-5.42,1
                  c-3.08,0.14-4,0.17-11.79,0.17s-8.71-0.03-11.79-0.17c-2.84-0.13-4.39-0.6-5.42-1c-1.36-0.53-2.33-1.16-3.35-2.18
                  c-1.02-1.02-1.65-1.99-2.18-3.35c-0.4-1.03-0.87-2.57-1-5.42c-0.14-3.08-0.17-4-0.17-11.79s0.03-8.71,0.17-11.79
                  c0.13-2.84,0.6-4.39,1-5.42c0.53-1.36,1.16-2.33,2.18-3.35c1.02-1.02,1.99-1.65,3.35-2.18c1.03-0.4,2.57-0.87,5.42-1
                  C23.29,8.12,24.21,8.09,32,8.09 M32,2.83c-7.92,0-8.91,0.03-12.03,0.18c-3.1,0.14-5.22,0.63-7.08,1.36
                  c-1.92,0.75-3.54,1.74-5.17,3.36c-1.62,1.62-2.62,3.25-3.36,5.17c-0.72,1.86-1.21,3.98-1.36,7.08C2.87,23.09,2.83,24.08,2.83,32
                  c0,7.92,0.03,8.91,0.18,12.03c0.14,3.1,0.63,5.22,1.36,7.08c0.75,1.92,1.74,3.54,3.36,5.17c1.62,1.62,3.25,2.62,5.17,3.36
                  c1.86,0.72,3.98,1.21,7.08,1.36c3.11,0.14,4.1,0.18,12.03,0.18s8.91-0.03,12.03-0.18c3.1-0.14,5.22-0.63,7.08-1.36
                  c1.92-0.75,3.54-1.74,5.17-3.36c1.62-1.62,2.62-3.25,3.36-5.17c0.72-1.86,1.21-3.98,1.36-7.08c0.14-3.11,0.18-4.1,0.18-12.03
                  s-0.03-8.91-0.18-12.03c-0.14-3.1-0.63-5.22-1.36-7.08c-0.75-1.92-1.74-3.54-3.36-5.17c-1.62-1.62-3.25-2.62-5.17-3.36
                  c-1.86-0.72-3.98-1.21-7.08-1.36C40.91,2.87,39.92,2.83,32,2.83L32,2.83z M32,17.02c-8.27,0-14.98,6.71-14.98,14.98
                  S23.73,46.98,32,46.98S46.98,40.27,46.98,32S40.27,17.02,32,17.02z M32,41.72c-5.37,0-9.72-4.35-9.72-9.72
                  c0-5.37,4.35-9.72,9.72-9.72s9.72,4.35,9.72,9.72C41.72,37.37,37.37,41.72,32,41.72z M47.57,12.93c-1.93,0-3.5,1.57-3.5,3.5
                  s1.57,3.5,3.5,3.5c1.93,0,3.5-1.57,3.5-3.5S49.5,12.93,47.57,12.93z"/>
              </defs>
              <use xlinkHref="#SVGID_1_" className="instagram-path" style={{overflow: "visible"}}/>
              <clipPath id="SVGID_00000147910990008690947410000004712467566051058357_"><use xlinkHref="#SVGID_1_" style={{overflow: "visible"}}/></clipPath>
              <image style={{overflow: "visible", clipPath: "url(#SVGID_00000147910990008690947410000004712467566051058357_)"}} width="64" height="64" xlinkHref="data:image/png;base64,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"></image>
              </g>
            </IconsSvg>
          </li>
          <li>
            <IconsSvg className="icon-medium rainbow" onClick={() => window.open('about:blank').location.href='https://medium.com/@KlayWeatherGirls'} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
              <path className="st0" d="M36.1,32c0,9.96-8.04,18-17.92,18S0.26,42.04,0.26,32s8.04-18,17.92-18S36.1,22.04,36.1,32"/>
              <path className="st0" d="M55.77,32c0,9.4-3.98,16.96-8.92,16.96S37.93,41.4,37.93,32s3.98-16.96,8.92-16.96C51.71,15.04,55.77,22.68,55.77,32"/>
              <path className="st0" d="M63.74,32c0,8.36-1.43,15.21-3.19,15.21c-1.75,0-3.19-6.85-3.19-15.21s1.43-15.21,3.19-15.21
              C62.38,16.79,63.74,23.64,63.74,32"/>
            </IconsSvg>
          </li>
        </IconsUl>
      </IconsDiv>
      <LogoDiv onClick={() => {window.scroll({top: 0, behavior: 'smooth'})}}>
        <LogoSvg className="logo rainbow" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 833.25 392.83">
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
      </LogoDiv>
      <CopyrightDiv>
        <CopyrightP>Copyright 2022 WeatherGirls. All rights reserved.</CopyrightP>
        <CopyrightP>Contact: <MailSpan className="rainbow" onClick={Copy}>WeatherGirls0211@gmail.com</MailSpan></CopyrightP>
      </CopyrightDiv>
      <CopiedP copied={copied}>
        <CopiedSvg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
          <path d="M470.6,105.4c12.5,12.5,12.5,32.8,0,45.3l-256,256c-12.5,12.5-32.8,12.5-45.3,0l-128-128c-12.5-12.5-12.5-32.8,0-45.3
            s32.8-12.5,45.3,0L192,338.7l233.4-233.3C437.9,92.9,458.2,92.9,470.6,105.4L470.6,105.4z"/>
        </CopiedSvg> 
        복사되었습니다!
      </CopiedP>
    </FooterElement>
  );
}

export default Footer;
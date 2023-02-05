import styled from "styled-components";

const TopButtonSvg = styled.svg`
  width: 60px;
  height: auto;
  position: fixed;
  z-index: 10;
  bottom: 30px;
  right: 30px;
  enable-background:new 0 0 232.8 232.8;
  display: ${(props) => props.display};
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: scale(1.15);
  }

  @media (max-width: 430px){
    width: 40px;
    bottom: 25px;
    right: 25px;
  }
  @media (max-width: 620px){
    width: 50px;
  }
  @media (max-width: 850px){
    &:hover{
      transform: none;
    }
  }
`;

function TopButton( props ) {
  return (
    <TopButtonSvg className="button_top rainbow" display={props.display} onClick={() => {window.scroll({top: 0, behavior: 'smooth'})}} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 232.8 232.8" xmlSpace="preserve">
      <circle className="st0" cx="116.4" cy="117.18" r="102.2"/>
      <g>
      <path className="st1" d="M156.48,152.86l-50.76-50.76c-6.12-6.12-6.12-16.04,0-22.15l0,0c6.12-6.12,16.04-6.12,22.15,0l50.76,50.76
          c6.12,6.12,6.12,16.04,0,22.15l0,0C172.52,158.97,162.6,158.97,156.48,152.86z"/>
      <path className="st1" d="M127.08,102.1l-50.76,50.76c-6.12,6.12-16.04,6.12-22.15,0l0,0c-6.12-6.12-6.12-16.04,0-22.15l50.76-50.76
          c6.12-6.12,16.04-6.12,22.15,0l0,0C133.2,86.06,133.2,95.98,127.08,102.1z"/>
      </g>
    </TopButtonSvg>
  );
}

export default TopButton;
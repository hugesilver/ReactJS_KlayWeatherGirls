import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

function TopButton( props ) {
  const isMax820 = useMediaQuery({ maxWidth: 820 });
  const isMax620 = useMediaQuery({ maxWidth: 620 });
  const isMax430 = useMediaQuery({ maxWidth: 620 });

  const TopButtonSvg = styled.svg`
    width: ${isMax430 ? '40px' : isMax620 ? '50px' : '60px'};
    height: auto;
    position: fixed;
    z-index: 10;
    bottom: ${isMax430 ? '25px' : '30px'};
    right: ${isMax430 ? '25px' : '30px'};
    enable-background:new 0 0 232.8 232.8;
    display: ${props.display};
    transition: all 0.3s ease-in-out;

    &:hover{
      transform: ${isMax820 ? 'none' : 'scale(1.15)'};
    }
  `;

  return (
    <TopButtonSvg className="button_top rainbow" onClick={() => {window.scroll({top: 0, behavior: 'smooth'})}} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 232.8 232.8" xmlSpace="preserve">
      <circle class="st0" cx="116.4" cy="117.18" r="102.2"/>
      <g>
      <path class="st1" d="M156.48,152.86l-50.76-50.76c-6.12-6.12-6.12-16.04,0-22.15l0,0c6.12-6.12,16.04-6.12,22.15,0l50.76,50.76
          c6.12,6.12,6.12,16.04,0,22.15l0,0C172.52,158.97,162.6,158.97,156.48,152.86z"/>
      <path class="st1" d="M127.08,102.1l-50.76,50.76c-6.12,6.12-16.04,6.12-22.15,0l0,0c-6.12-6.12-6.12-16.04,0-22.15l50.76-50.76
          c6.12-6.12,16.04-6.12,22.15,0l0,0C133.2,86.06,133.2,95.98,127.08,102.1z"/>
      </g>
    </TopButtonSvg>
  );
}

export default TopButton;
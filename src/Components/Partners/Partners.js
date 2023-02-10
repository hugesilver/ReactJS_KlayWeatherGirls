import styled from "styled-components";

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
  margin-top: 5%;
`;

const PartnersStoneOddDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5%;

  @media (max-width: 1085px){
    gap: 0.1%;
  }
`;

const PartnersStoneEvenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 14%;

  @media (max-width: 1085px){
    gap: 0.1%;
  }
`;

const PartnersStoneImg = styled.img`
  width: 23%;
  margin: -2% 0;

  @media (max-width: 1085px){
    width: 33%;
  }
`;

// Grass, Ladybug Area

const Stone00GrassImg = styled.img`
  position: absolute;
  height: 11%;
  left: 16%;
  top: 30.5%;
  z-index: 2;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    height: 10%;
    top: 33%;
  }
  @media (max-width: 1085px){
    height: 11%;
    top: 28.5%;
  }
  @media (max-width: 980px){
    height: 9%;
    top: 29%;
  }
  @media (max-width: 730px){
    height: 9%;
    top: 29.5%;
  }
  @media (max-width: 440px){
    height: 9%;
    top: 31.5%;
  }
`;

const Stone01GrassImg = styled.img`
  position: absolute;
  height: 11%;
  left: 38%;
  top: 30.5%;
  z-index: 2;
  
  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    height: 10%;
    top: 33%;
  }
  @media (max-width: 1085px){
    height: 11%;
    top: 28.5%;
  }
  @media (max-width: 980px){
    height: 9%;
    top: 29%;
    left: 35%;
  }
  @media (max-width: 730px){
    height: 9%;
    top: 29.5%;
    left: 35%;
  }
  @media (max-width: 440px){
    height: 9%;
    top: 31.5%;
    left: 35%;
  }
`;

const Stone02GrassImg = styled.img`
  position: absolute;
  height: 11%;
  right: 7%;
  top: 30.5%;
  z-index: 2;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    height: 10%;
    top: 33%;
  }
  @media (max-width: 1085px){
    height: 11%;
    top: 28.5%;
  }
  @media (max-width: 980px){
    height: 9%;
    top: 29%;
    right: 4.5%
  }
  @media (max-width: 730px){
    height: 9%;
    top: 29.5%;
    right: 4.5%;
  }
  @media (max-width: 440px){
    height: 9%;
    top: 31.5%;
    right: 4.5%;
  }
`;

const Stone11LadybugImg = styled.img`
  position: absolute;
  height: 6%;
  right: 25%;
  top: 39.5%;
  z-index: 2;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    top: 41%;
    right: 25%;
  }
  @media (max-width: 1085px){
    height: 7%;
    top: 37%;
    right: 24%;
  }
  @media (max-width: 980px){
    height: 7%;
    top: 37.5%;
    right: 24%;
  }
  @media (max-width: 730px){
    height: 7%;
    top: 38%;
    right: 24%;
  }
  @media (max-width: 440px){
    height: 7%;
    top: 39.5%;
    right: 24%;
  }
`;

const Stone20GrassImg = styled.img`
  position: absolute;
  height: 11%;
  left: 17%;
  top: 68.5%;
  z-index: 2;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    height: 10%;
    top: 70%;
  }
  @media (max-width: 1085px){
    height: 11%;
    top: 68.5%;
  }
  @media (max-width: 980px){
    height: 9%;
    top: 68.5%;
    left: 18%;
  }
  @media (max-width: 730px){
    height: 9%;
    top: 69%;
    left: 18%;
  }
  @media (max-width: 440px){
    height: 9%;
    top: 70%;
    left: 18%;
  }
`;

const Stone30GrassImg = styled.img`
  position: absolute;
  height: 11%;
  left: 32%;
  top: 87.5%;
  z-index: 2;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    height: 10%;
    top: 88%;
  }
  @media (max-width: 1085px){
    height: 11%;
    top: 88.5%;
    left: 33%;
  }
  @media (max-width: 980px){
    height: 9%;
    top: 89%;
    left: 33.5%;
  }
  @media (max-width: 730px){
    height: 9%;
    top: 89.5%;
    left: 34%;
  }
  @media (max-width: 440px){
    height: 9%;
    top: 89.8%;
    left: 34.5%;
  }
`;

const Stone31GrassImg = styled.img`
  position: absolute;
  height: 11%;
  right: 20%;
  top: 87.5%;
  z-index: 2;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1444px){
    height: 10%;
    top: 88%;
  }
  @media (max-width: 1085px){
    height: 11%;
    top: 88.5%;
    right: 18%;
  }
  @media (max-width: 980px){
    height: 9%;
    top: 89%;
    right: 18%;
  }
  @media (max-width: 730px){
    height: 9%;
    top: 89.5%;
    right: 18%;
  }
  @media (max-width: 440px){
    height: 9%;
    top: 89.8%;
    right: 18%;
  }
`;

const PartnersSticker1Img = styled.img`
  position: absolute;
  height: 12%;
  left: 9.5%;
  top: 1%;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;
  z-index: 6;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1280px){
    height: 10%;
    left: 7%;
  }
  @media (max-width: 600px){
    height: 10%;
    left: 0.5%;
    top: 0%;
  }
`;

const PartnersSticker2Img = styled.img`
  position: absolute;
  height: 10%;
  right: 11%;
  top: 8%;

  transition: transform 0.3s ease-in-out;
  transition-delay: 0s !important;
  z-index: 6;

  &:hover {
    transform: scale(1.1) rotate(0deg) !important;
  }

  @media (max-width: 1280px){
    right: 10%;
  }
  @media (max-width: 890px){
    right: 6%;
  }
  @media (max-width: 600px){
    height: 10%;
    right: 1%;
    top: 13%;
  }
`;

function Partners() {
  return (
    <TeamSection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/partners/title.png" />
      </div>
      <PartnersSticker1Img src="images/partners/spring-sticker-3.png" data-aos="zoom-in" data-aos-duration="500" />
      <PartnersSticker2Img src="images/partners/spring-sticker-4.png" data-aos="zoom-in" data-aos-duration="500" />
      <div style={{marginTop: "8%", marginBottom: "3%"}}>
        <PartnersStoneOddDiv>
          <PartnersStoneImg src="images/partners/stone_closeyoureyes.png" alt="CloseYourEyes" data-aos="zoom-in" data-aos-duration="500" />
          <PartnersStoneImg src="images/partners/stone_lazygourmetclub.png" alt="LazyGourmetClub" data-aos="zoom-in" data-aos-duration="500" />
          <PartnersStoneImg src="images/partners/stone_klayforest.png" alt="KlayForest" data-aos="zoom-in" data-aos-duration="500" />
        </PartnersStoneOddDiv>
        <PartnersStoneEvenDiv>
          <PartnersStoneImg src="images/partners/stone_klaypad.png" alt="KlayPad" data-aos="zoom-in" data-aos-duration="500" />
          <PartnersStoneImg src="images/partners/stone_babiz.png" alt="Babiz" data-aos="zoom-in" data-aos-duration="500" />
        </PartnersStoneEvenDiv>
        <PartnersStoneOddDiv>
          <PartnersStoneImg src="images/partners/stone_goodfriends.png" alt="GoodFriends" data-aos="zoom-in" data-aos-duration="500" />
          <PartnersStoneImg src="images/partners/stone_klayfox.png" alt="KlayFox" data-aos="zoom-in" data-aos-duration="500" />
          <PartnersStoneImg src="images/partners/stone_nftz.png" alt="NFTz" data-aos="zoom-in" data-aos-duration="500" />
        </PartnersStoneOddDiv>
        <PartnersStoneEvenDiv>
          <PartnersStoneImg src="images/partners/stone_isobox.png" alt="IsoBox" data-aos="zoom-in" data-aos-duration="500" />
          <PartnersStoneImg src="images/partners/stone_klayvox.png" alt="KlayVox" data-aos="zoom-in" data-aos-duration="500" />
        </PartnersStoneEvenDiv>
      </div>
      <Stone00GrassImg src="images/partners/spring-sticker-grass.png" data-aos="zoom-in" data-aos-duration="500" />
      <Stone01GrassImg src="images/partners/spring-sticker-grass.png" data-aos="zoom-in" data-aos-duration="500" />
      <Stone02GrassImg src="images/partners/spring-sticker-grass.png" data-aos="zoom-in" data-aos-duration="500" />
      <Stone11LadybugImg src="images/partners/spring-sticker-5.png" data-aos="zoom-in" data-aos-duration="500" />
      <Stone20GrassImg src="images/partners/spring-sticker-grass.png" data-aos="zoom-in" data-aos-duration="500" />
      <Stone30GrassImg src="images/partners/spring-sticker-grass.png" data-aos="zoom-in" data-aos-duration="500" />
      <Stone31GrassImg src="images/partners/spring-sticker-grass.png" data-aos="zoom-in" data-aos-duration="500" />
    </TeamSection>
  );
}

export default Partners;
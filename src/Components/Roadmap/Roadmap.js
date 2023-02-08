import styled from "styled-components";

const RoadmapSection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #fbf6d1;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
  width: auto;
  height: 130px;
  margin-top: 12%;

  @media (max-width: 980px){
    height: 120px;
  }
  @media (max-width: 760px){
    height: 100px;
  }
  @media (max-width: 620px){
    height: 85px;
  }
  @media (max-width: 470px){
    height: 75px;
  }
`;

const RoadmapDiv = styled.div`
  position: relative;
  margin-top: 9%;
  margin-bottom: 12%;
  width: 60%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1280px){
    width: 75%;
  }
  @media (max-width: 1080px){
    width: 80%;
    margin-top: 12%;
    margin-bottom: 12%;
  }
  @media (max-width: 980px){
    width: 90%;
    margin-top: 12%;
    margin-bottom: 12%;
  }
  @media (max-width: 850px){
    width: 85%;
    margin-top: 12%;
    margin-bottom: 12%;
  }
  @media (max-width: 760px){
    width: 90%;
    margin-top: 11%;
    margin-bottom: 11%;
  }
  @media (max-width: 690px){
    width: 100%;
    margin-top: 18%;
  }
  @media (max-width: 600px){
    width: 100%;
    margin-top: 14%;
    margin-bottom: 11%;
  }
  @media (max-width: 530px){
    position: relative;
    width: 120%;
    margin-top: 18%;
    margin-bottom: 18%;
    left: 50%;
    transform: translate(-50%,0);
  }
  @media (max-width: 370px){
    margin-top: 25%;
    margin-bottom: 25%;
  }
`;

const JarAndPaperImg = styled.img`
  width: 100%;
`;

const RoadmapDoodleImg = styled.img`
  position: absolute;
  width: 11.5%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const RoadmapDoodleLastImg = styled.img`
  position: absolute;
  width: 11.5%;
  height: auto;
  top: 76.18%;
  left: 38.97%;
`;

const VisitOurMediumButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 45px;
  border-radius: 40px;
  border: 2px solid #a80079;
  background: #FF9099;
  background: linear-gradient(to bottom, #FF9099 0%, #FF7082 100%);
  margin-bottom: 8%;
  box-shadow:  0px 4px 10px 0px rgba(74,62,43,0.3);

  font-family: 'yg-jalnan';
  color: #fff;
  font-weight: bold;
  font-size: 16pt;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const RoadmapStickerImg = styled.img`
  position: absolute;
  height: 10%;
  z-index: 2;
`;

const RoadmapSticker3Img = styled.img`
  position: absolute;
  height: 10%;
  left: 2%; 
  bottom: 23%;
  z-index: 2;

  @media (max-width: 530px){
    left: 1%;
    bottom: 16%;
  }
`;

function Roadmap() {
  return (
    <RoadmapSection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/roadmap/title.png" />
      </div>
      <RoadmapDiv data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <JarAndPaperImg src="images/roadmap/jar_and_paper.png" />
        <RoadmapDoodleImg src="images/roadmap/roadmap_doodle_1.png" className="rainbow" style={{top: "21.5%", right: "22%"}} />
        <RoadmapDoodleImg src="images/roadmap/roadmap_doodle_2.png" className="rainbow" style={{top: "41.2%", left: "44.7%"}} />
        <RoadmapDoodleImg src="images/roadmap/roadmap_doodle_3.png" className="rainbow" style={{top: "44%", left: "26.2%"}} />
        <RoadmapDoodleImg src="images/roadmap/roadmap_doodle_4.png" className="rainbow" style={{top: "50.1%", right: "14.5%"}} />
        <RoadmapDoodleLastImg src="images/roadmap/roadmap_doodle_5.png"/>
      </RoadmapDiv>
      <VisitOurMediumButton className="rainbow">Visit our Medium</VisitOurMediumButton>
      <RoadmapStickerImg src="images/roadmap/summer-sticker-3.png" style={{left: "4%", top: "11%"}} data-aos="zoom-in" data-aos-duration="500" />
      <RoadmapStickerImg src="images/roadmap/summer-sticker-4.png" style={{right: "3%", top: "19%"}} data-aos="zoom-in" data-aos-duration="500" />
      <RoadmapSticker3Img src="images/roadmap/summer-sticker-5.png" data-aos="zoom-in" data-aos-duration="500" />
      <RoadmapStickerImg src="images/roadmap/summer-sticker-6.png" style={{right: "1%", bottom: "2%"}} data-aos="zoom-in" data-aos-duration="500" />
    </RoadmapSection>
  );
}

export default Roadmap;
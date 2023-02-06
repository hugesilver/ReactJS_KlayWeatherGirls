import styled from "styled-components";

const StorySection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #a7d0ec;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
  width: auto;
  height: 130px;

  @media (max-width: 1080px){
    margin-top: 5%;
  }
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

const StorySectionDiv = styled.div`
  position: relative;
  height: auto;
  margin-top: 9%;
  margin-bottom: 21%;
`;

const StoryCardDiv = styled.div`
  width: 100%;
  margin: 180px 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 620px){
    margin: 120px 0;
  }
`;

const StoryCardImg = styled.img`
  width: 65%;
  padding-bottom: 18px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1080px){
    width: 70%;
  }
  @media (max-width: 760px){
    width: 80%;
  }
`;

const StoryCardP = styled.p`
  width: 100%;
  font-family: "GoyangIlsan";
  font-size: 21pt;
  line-height: 42pt;
  margin: 0 auto;

  @media (max-width: 1080px){
    font-size: 18pt;
    line-height: 32pt;
  }
  @media (max-width: 870px){
    font-size: 16pt;
    line-height: 28pt;
  }
  @media (max-width: 760px){
    font-size: 15pt;
    line-height: 28pt;
  }
  @media (max-width: 680px){
    font-size: 14pt;
    line-height: 24pt;
  }
  @media (max-width: 620px){
    font-size: 12pt;
    line-height: 18pt;
  }
  @media (max-width: 530px){
    font-size: 11pt;
    line-height: 18pt;
  }
  @media (max-width: 510px){
    width: 80%;
    font-size: 10pt;
    line-height: 18pt;
  }
`;

const StoryCardBoldP = styled.p`
  font-family: "GoyangIlsan"; 
  font-size: 32pt;
  font-weight: bold;
  line-height: 64pt;

  @media (max-width: 870px){
    font-size: 26pt;
    line-height: 52pt;
  }
  @media (max-width: 760px){
    font-size: 24pt;
    line-height: 48pt;
  }
  @media (max-width: 530px){
    font-size: 21pt;
    line-height: 42pt;
  }
  @media (max-width: 510px){
    font-size: 18pt;
    line-height: 36pt;
  }
  @media (max-width: 380px){
    font-size: 16pt;
    line-height: 32pt;
  }
`;

const StoryStickerImg1 = styled.img`
  position: absolute;
  height: 4%;
  left: 6%;
  bottom: 3%;
  transition: transform 0.3s ease-in-out;
  transition-delay: 0s;

  &:hover {
    transform:scale(1.1) !important;
  }
`;

const StoryStickerImg2 = styled.img`
  position: absolute;
  height: 4%;
  right: 5%;
  bottom: 1%;
  transition:transform 0.3s ease-in-out;
  transition-delay:0s;

  &:hover {
    transform:scale(1.1) !important;
  }
`;

function Story() {
  return (
    <StorySection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/story/title.png" />
      </div>
      <StorySectionDiv>
        <StoryCardDiv>
          <StoryCardImg src="images/story/story-photo-1.png" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" />
          <StoryCardP data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            WeatherGirls는 날씨가 사라져버린 행성에서 살고 있는 소녀들입니다.<br />
            소녀들은 여태동안 단 하나의 날씨로 지내와서 항상 무료함을 느끼며 생활했어요.
          </StoryCardP>
        </StoryCardDiv>
        <StoryCardDiv>
          <StoryCardImg src="images/story/story-photo-2.png" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" />
          <StoryCardBoldP data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            “지구에는 날씨가 남아있대!”
          </StoryCardBoldP>
          <StoryCardP data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            그러던 어느날, 한 소녀가 아직 지구에는 날씨가 남아있다는 사실을 발견했어요.
          </StoryCardP>
        </StoryCardDiv>
        <StoryCardDiv>
          <StoryCardImg src="images/story/story-photo-3.png" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" />
          <StoryCardP data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            소녀들은 마법의 힘이 깃들어져있는 마법 구슬 안에 날씨를 담아와서,<br />
            자신들의 행성에 날씨를 다시 되살리기로 마음먹었어요.
          </StoryCardP>
        </StoryCardDiv>
        <StoryCardDiv>
          <StoryCardImg src="images/story/story-photo-4.png" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" />
          <StoryCardP data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            그리하여 소녀들의 여행이 시작되었습니다!<br />
            과연 소녀들이 안전하게 지구에 도착할 수 있을까요?
          </StoryCardP>
        </StoryCardDiv>
      </StorySectionDiv>
      <StoryStickerImg1 src="images/story/summer-sticker-1.png" />
      <StoryStickerImg2 src="images/story/summer-sticker-2.png" />
    </StorySection>
  );
}

export default Story;
import { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TrailerSection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #fbf6d1;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  height: 130px;
  margin-top: 8%;

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

const SwiperTrailerDiv = styled.div`
  position: relative;
  margin: 8% 0;

  @media (max-width: 1280px){
    margin: 13% 0;
  }
  @media (max-width: 420px){
    margin: 21% 0;
  }
`;

const SwiperSlideiFrame = styled.iframe`
  display: block;
  width: 1600px;
  height: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1920px){
    width: 1024px;
    height: 576px;
  }
  @media (max-width: 1444px){
    width: 960px;
    height: 540px;
  }
  @media (max-width: 1280px){
    width: 840px;
    height: 472.5px;
  }
  @media (max-width: 1080px){
    width: 720px;
    height: 405px;
  }
  @media (max-width: 950px){
    width: 680px;
    height: 382.5px;
  }
  @media (max-width: 890px){
    width: 580px;
    height: 326.25px;
  }
  @media (max-width: 750px){
    width: 520px;
    height: 292.5px;
  }
  @media (max-width: 690px){
    width: 490px;
    height: 275.625px;
  }
  @media (max-width: 650px){
    width: 420px;
    height: 236.25px;
  }
  @media (max-width: 570px){
    width: 380px;
    height: 213.75px;
  }
  @media (max-width: 530px){
    width: 320px;
    height: 180px;
  }
  @media (max-width: 430px){
    width: 290px;
    height: 163.125px;
  }
`;

const PrevButtonDiv = styled.div`
  position: absolute;
  width: 80px;
  height: auto;
  left: 5.5%;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;

  &:after{
    display: none;
  }

  @media (max-width: 2160px){
    width: 70px;
    left: 3%;
  }
  @media (max-width: 1920px){
    width: 60px;
    left: 13%;
  }
  @media (max-width: 1600px){
    width: 50%;
    left: 6%;
  }
  @media (max-width: 950px){
    width: 50px;
    left: 4%;
  }
  @media (max-width: 890px){
    width: 50px;
    left: 6%;
  }
  @media (max-width: 820px){
    width: 50px;
    left: 4%;
  }
  @media (max-width: 750px){
    width: 40px;
    left: 5%;
  }
  @media (max-width: 620px){
    width: 35px;
    left: 5.5%;
  }
  @media (max-width: 580px){
    width: 35px;
    left: 4.5%;
  }
  @media (max-width: 530px){
    width: 30px;
    left: 7%;
  }
  @media (max-width: 470px){
    width: 30px;
    left: 4%;
  }
  @media (max-width: 430px){
    width: 30px;
    left: 4%;
  }
`;

const NextButtonDiv = styled.div`
  position: absolute;
  width: 80px;
  height: auto;
  right: 5.5%;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;

  &:after{
    display: none;
  }

  @media (max-width: 2160px){
    width: 70px;
    right: 3%;
  }
  @media (max-width: 1920px){
    width: 60px;
    right: 13%;
  }
  @media (max-width: 1600px){
    width: 50%;
    right: 6%;
  }
  @media (max-width: 950px){
    width: 50px;
    right: 4%;
  }
  @media (max-width: 890px){
    width: 50px;
    right: 6%;
  }
  @media (max-width: 820px){
    width: 50px;
    right: 4%;
  }
  @media (max-width: 750px){
    width: 40px;
    right: 5%;
  }
  @media (max-width: 620px){
    width: 35px;
    right: 5.5%;
  }
  @media (max-width: 580px){
    width: 35px;
    right: 4.5%;
  }
  @media (max-width: 530px){
    width: 30px;
    right: 7%;
  }
  @media (max-width: 470px){
    width: 30px;
    right: 4%;
  }
  @media (max-width: 430px){
    width: 30px;
    right: 4%;
  }
`;

const VisitOurYoutubeButton = styled.button`
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
  @media (max-width: 1080px){
    font-size: 14pt;
  }
`;

const TrailerSticker1Img = styled.img`
  position: absolute;
  height: 13%;
  left: 4%;
  top: 14%;
  transition: transform 0.3s ease-in-out;
  transition-delay: 0s;
  z-index: 2;

  &:hover {
    transform:scale(1.1) !important;
  }
`;

const TrailerSticker2Img = styled.img`
  position: absolute;
  height: 13%;
  right: 3%;
  bottom: 13%;
  transition: transform 0.3s ease-in-out;
  transition-delay: 0s;
  z-index: 2;

  &:hover {
    transform:scale(1.1) !important;
  }

  @media (max-width: 510px){
    bottom: 1%;
  }
`;

function Trailer() {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  return (
    <TrailerSection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/trailer/title.png" />
      </div>
      <SwiperTrailerDiv data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <Swiper
          speed={500}
          loop={true}
          slidesPerView={1}
          navigation={{
            prevEl: prevButton.current,
            nextEl: nextButton.current
          }}
          modules={[Navigation]}>
          <SwiperSlide style={{textAlign: "center", display: "flex"}}><SwiperSlideiFrame src="https://www.youtube-nocookie.com/embed/dFQP27ep-ac" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen /></SwiperSlide>
          <SwiperSlide style={{textAlign: "center", display: "flex"}}><SwiperSlideiFrame src="https://www.youtube-nocookie.com/embed/BNOyiS3a64M" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen /></SwiperSlide>
          <SwiperSlide style={{textAlign: "center", display: "flex"}}><SwiperSlideiFrame src="https://www.youtube-nocookie.com/embed/fspYA_jZE3g" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen /></SwiperSlide>
          <SwiperSlide style={{textAlign: "center", display: "flex"}}><SwiperSlideiFrame src="https://www.youtube-nocookie.com/embed/ocAjG3XbJGg" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen /></SwiperSlide>
        </Swiper>
        <PrevButtonDiv ref={prevButton} className="rainbow">
          <svg className="arrowLeft" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 232.8 232.8" xmlSpace="preserve">
            <path className="st0" d="M42.58,132.37l124.35,71.79c9.68,5.59,21.79-1.4,21.79-12.58V48c0-11.18-12.1-18.17-21.79-12.58L42.58,107.21C32.9,112.8,32.9,126.78,42.58,132.37z"/>
          </svg>
        </PrevButtonDiv>
        <NextButtonDiv ref={nextButton} className="rainbow">
          <svg className="arrowRight" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 232.8 232.8" xmlSpace="preserve">
            <path className="st0" d="M195.57,107.21L71.22,35.42c-9.68-5.59-21.79,1.4-21.79,12.58v143.59c0,11.18,12.1,18.17,21.79,12.58l124.35-71.79C205.26,126.78,205.26,112.8,195.57,107.21z"/>
          </svg>
        </NextButtonDiv>
      </SwiperTrailerDiv>
      <VisitOurYoutubeButton className="rainbow" onClick={() => window.open('about:blank').location.href='https://www.youtube.com/channel/UCU7jA5XDiijAZgYIuOYonQw'}>Visit our Youtube</VisitOurYoutubeButton>
      <TrailerSticker1Img src="images/trailer/summer-sticker-7.png" data-aos="zoom-in" data-aos-duration="500" />
      <TrailerSticker2Img src="images/trailer/summer-sticker-8.png" data-aos="zoom-in" data-aos-duration="500" />
    </TrailerSection>
  );
}

export default Trailer;
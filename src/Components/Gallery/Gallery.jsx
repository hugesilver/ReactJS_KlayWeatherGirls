import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import styled from "styled-components";
import 'swiper/css';
import './Gallery.css';
import { useRef, useState } from 'react';

const GallerySection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #a7d0ec;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
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

const SwiperGalleryDiv = styled.div`
  margin: 8% 0;

  @media (max-width: 1280px){
    margin: 13% 0;
  }
  @media (max-width: 760px){
    margin: 15% 0;
  }
  @media (max-width: 420px){
    margin: 25% 0;
  }
`;

const SwiperSlideImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 30px;
  transition: box-shadow, filter 0.5s;
  border: 5px solid #ffffff;

  &:hover {
    box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.5);
  }
`;

const SwiperSlideSvgRaw = styled.svg`
  position: absolute;
  display: none;
  width: 25%;
  height: 25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  enable-background: new 0 0 232.8 232.8;
`;

const SwiperSlideHoverImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 30px;
  transition: box-shadow, filter 0.5s;
  border: 5px solid #ffffff;
`;

const SwiperSlideHoverDiv = styled.div`
  &:hover ${SwiperSlideHoverImg}{
    box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.5);
    filter: brightness(70%);
  }
  &:hover ${SwiperSlideSvgRaw}{
    display: block;
  }
`;

const SwiperSlideSvg = () => {
  return (
    <SwiperSlideSvgRaw version="1.1" className="button_play rainbow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 232.8 232.8" xmlSpace="preserve">
      <path className="st0" d="M195.57,107.21L71.22,35.42c-9.68-5.59-21.79,1.4-21.79,12.58v143.59c0,11.18,12.1,18.17,21.79,12.58l124.35-71.79C205.26,126.78,205.26,112.8,195.57,107.21z"/>
    </SwiperSlideSvgRaw>
  );
};

const ShowVideoDiv = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.95);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
`;

const ShowVideoCloseSvg = styled.svg`
  display: inline;
  position: absolute;
  top: 30px;
  right: 30px;
  fill: #ffffff;
  width: 32pt;
  height: 32pt;
  enable-background:new 0 0 64 64;

  &:hover {
    fill: #4e4e4e
  }
`;

const ShowVideoVideo = styled.video`
  width: 45%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 850px){
    width: 70%;
    height: auto;
  }
`;

const ViewMoreOnOpenseaButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 40px;
  padding: 25px 45px;
  border: 2px solid #4260c2;
  background: #6388ff;
  background: linear-gradient(to bottom, #6388ff 0%, #6783e0 100%);
  box-shadow: 0px 4px 10px 0px rgba(74,62,43,0.3);
  margin-bottom: 8%;

  font-family: 'yg-jalnan';
  color: #fff;
  font-weight: bold;
  font-size: 16pt;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform:scale(1.05);
  }

  @media (max-width: 650px){
    margin-bottom: 10%;
  }
`;

function Gallery() {
  const [showVideoDisplay, setShowVideoDisplay] = useState('none');
  const VideoRef = useRef(null);

  const onPlayClick = (which) => {
    setShowVideoDisplay('block');
    VideoRef.current.src = `videos/gallery_${which}.mp4`;
    VideoRef.current.style.display = "block";
    VideoRef.current.volume = 0.3;
    const Play = VideoRef.current.play();
    if (Play !== undefined) {
      Play.then((_) => {}).catch((error) => {});
    }
  };

  const onClose = () => {
    setShowVideoDisplay('none');
    VideoRef.current.style.display = "none";
    VideoRef.current.currentTime = 0;
    const Pause = VideoRef.current.pause();
    if (Pause !== undefined) {
      Pause.then((_) => {}).catch((error) => {});
    }
  };

  return (
    <GallerySection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/gallery/title.png" />
      </div>
      <SwiperGalleryDiv>
        <Swiper
          style={{overflow: "visible"}} // box-shadow 잘리는 것이 원하지 않으면 넣어주자.
          data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"
          speed={2500}
          loop={true}
          spaceBetween={40}
          slidesPerView={4.5}
          freemode={"true"}
          centeredSlides={true}
          centeredSlidesBounds={true}
          autoplay={{
              delay: 1,
              disableOnInteraction: false,
          }}
          breakpoints={{
              1281:{
                  slidesPerView: 4.5,
              },
              981:{
                  slidesPerView: 3.5,
              },
              761:{
                  slidesPerView: 2.5,
              },
              0:{
                  slidesPerView: 1.5,
              }
          }}
          modules={[Autoplay]}>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-1.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-2.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("raincoat")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-raincoat.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-4.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-5.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("demon")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-demon.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-7.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("mermaid")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-mermaid.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-9.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-10.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("astronaut")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-astronaut.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-12.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-13.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("knight")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-knight.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-15.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-16.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("safari")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-safari.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-18.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-19.png" /></SwiperSlide>
          <SwiperSlide onClick={() => onPlayClick("blacktiger")}>
            <SwiperSlideHoverDiv>
              <SwiperSlideHoverImg className="rainbow" src="images/gallery/slide-blacktiger.png" />
              <SwiperSlideSvg />
            </SwiperSlideHoverDiv>
          </SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-21.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-22.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg className="rainbow" src="images/gallery/slide-winter.png" /></SwiperSlide>
          <SwiperSlide><SwiperSlideImg src="images/gallery/slide-24.png" /></SwiperSlide>
        </Swiper>
      </SwiperGalleryDiv>
      <ShowVideoDiv style={{display: showVideoDisplay}}>
        <ShowVideoCloseSvg className="rainbow" onClick={onClose} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
          <path d="M58.7,12.8L12.8,58.7c-2.5,2.5-6.3,2.9-8.4,0.8l0,0c-2.1-2.1-1.7-5.8,0.8-8.4L51.1,5.3c2.5-2.5,6.3-2.9,8.4-0.8l0,0C61.6,6.5,61.3,10.3,58.7,12.8z"/>
          <path d="M51.1,58.7L5.3,12.9c-2.5-2.5-2.9-6.3-0.8-8.4l0,0c2.1-2.1,5.8-1.7,8.4,0.8l45.8,45.8c2.5,2.5,2.9,6.3,0.8,8.4l0,0C57.4,61.6,53.7,61.2,51.1,58.7z"/>
        </ShowVideoCloseSvg>
        <ShowVideoVideo ref={VideoRef} onEnded={onClose} preload="none" src="" type="video/mp4" />
      </ShowVideoDiv>
      <ViewMoreOnOpenseaButton className="rainbow">View more on Opensea</ViewMoreOnOpenseaButton>
    </GallerySection>
  );
}

export default Gallery;
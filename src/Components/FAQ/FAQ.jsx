import { memo, useRef, useState } from "react";
import styled from "styled-components";

const FAQSection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #ffffff;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  height: 130px;
  margin-top: 5%;

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

const FAQRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  width: 100%;
  height: auto;
  margin-top: 6%;

  @media (max-width: 1280px){
    margin-top: 11%;
    margin-bottom: 15%;
  }
  @media (max-width: 750px){
    margin-top: 8%;
    margin-bottom: 30%;
  }
  @media (max-width: 570px){
    margin-top: 14%;
  }
`;

const FAQColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 35%;
  margin-bottom: 14%;

  @media (max-width: 1530px){
    width: 37.5%;
  }
  @media (max-width: 1280px){
    width: 57%;
    margin-bottom: 0%;
  }
  @media (max-width: 820px){
    width: 70%;
  }
  @media (max-width: 680px){
    width: 82%;
  }
  @media (max-width: 570px){
    width: 85%;
  }
  @media (max-width: 510px){
    width: 82%;
  }
  @media (max-width: 400px){
    width: 86%;
  }
`;

const FAQContainerDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 30px auto;
  border: 3px solid #000000;
  border-radius: 30px;

  @media (max-width: 1280px){
    margin: 20px auto;
  }
  @media (max-width: 600px){
    margin: 25px auto;
  }
`;

const FAQQuestionDiv = styled.div`
  position: relative;
`;

const FAQQuestionP = styled.p`
  font-family: 'Godo';
  font-size: 15pt;
  padding: 20pt 0;
  padding-left: 20pt;
  color: #000000;
  outline: none;

  @media (max-width: 1320px){
    font-size: 14pt;
  }
  @media (max-width: 890px){
    font-size: 13pt;
  }
  @media (max-width: 600px){
    font-size: 12pt;
  }
  @media (max-width: 510px){
    font-size: 10pt;
  }
  @media (max-width: 420px){
    font-size: 9pt;
  }
  @media (max-width: 370px){
    font-size: 8.5pt;
  }
`;

const FAQArrowSvg = styled.svg`
  position: absolute;
  width: 15pt;
  height: 15pt;
  enable-background:new 0 0 214.3 196.4;
  top: 40%;
  right: 3%;
  transition: transform 0.3s linear;
  transform: ${(props) => {return props.isOpen ? "rotate(180deg)" : "rotate(0deg)"}};
  transform-origin: center center;

  @media (max-width: 600px){
    width: 12pt;
    height: 12pt;
  }
`;

const FAQAnswerContainerDiv = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const FAQAnswerP = styled.p`
  font-family: 'GoyangIlsan';
  font-size: 14pt;
  line-height: 20pt;
  padding: 0 30pt 20pt 20pt;
  color: #000000;

  @media (max-width: 890px){
    font-size: 13pt;
  }
  @media (max-width: 650px){
    font-size: 11pt;
  }
  @media (max-width: 600px){
    padding: 0 20pt 20pt 20pt;
  }
  @media (max-width: 510px){
    font-size: 10pt;
  }
  @media (max-width: 420px){
    font-size: 9pt;
    padding: 0 30pt 20pt 20pt;
  }
  @media (max-width: 370px){
    font-size: 8.5pt;
  }
`;

const FAQBlock = (props) => {
  const parentRef = useRef();
  const childRef = useRef();
  const [open, setOpen] = useState(false);

  const onClick = (() => {
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setOpen(!open);
  });

  return (
    <FAQContainerDiv className="rainbow" onClick={onClick}>
      <div>
        <FAQQuestionDiv>
          <FAQQuestionP>{props.question}</FAQQuestionP>
          <FAQArrowSvg isOpen={open} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 214.3 196.4" xmlSpace="preserve">
            <path d="M40.8,0h132.6c31.4,0,51,34,35.3,61.2l-66.3,114.9c-15.7,27.2-54.9,27.2-70.6,0L5.5,61.1C-10.2,34,9.4,0,40.8,0z" />
          </FAQArrowSvg>
        </FAQQuestionDiv>
      </div>
      <FAQAnswerContainerDiv ref={parentRef}>
        <div ref={childRef}><FAQAnswerP>{props.answer}</FAQAnswerP></div>
      </FAQAnswerContainerDiv>
    </FAQContainerDiv>
  );
};

const FAQAccodion = memo(FAQBlock);

function FAQ() {
  return (
    <FAQSection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/faq/title.png" />
      </div>
      <FAQRowDiv data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <FAQColumnDiv>
          <FAQAccodion question="Q. 민팅 일정은 언제인가요?" answer="A. 4월 10일로 계획되어 있습니다. 정확한 시간은 추후 디스코드, 트위터를 통해 공지 드리겠습니다." />
          <FAQAccodion question="Q. 총 수량은 몇 개인가요?" answer="A. 총 5000명의 소녀들이 여행을 준비하고 있습니다." />
          <FAQAccodion question="Q. 민팅 비용은 얼마인가요?" answer="A. 화이트리스트 기준 50Klay입니다." />
          <FAQAccodion question="Q. 클레이웨더걸즈의 2차 창작이 가능한가요?" answer="A. 웨더걸즈 NFT를 구매하신다면, 구매하신 NFT 이미지에 대해서 판매하기 전까지 2차 창작을 허용합니다. 마음대로 사용하실 수 있으나, &quot;판매&quot; 하신다면 저작권이 사라집니다." />
        </FAQColumnDiv>
        <FAQColumnDiv>
          <FAQAccodion question="Q. 어떻게 살 수 있나요?" answer="A. Klay를 사용하여 살 수 있으며, 민팅 홈페이지에 Kaikas 지갑을 연결하여 구매할 수 있습니다." />
          <FAQAccodion question="Q. 웨더걸즈NFT의 각각의 레어리티가 존재하나요?" answer="A. 웨더걸즈는 파츠 별로 각각의 레어리티가 존재하며 1/1작품도 존재합니다. 정확한 확률 및 레어리티 표는 업데이트 예정입니다." />
          <FAQAccodion question="Q. 화이트리스트는 어떻게 되나요?" answer="A. 트위터나 디스코드 등 웨더걸즈 SNS에서 진행 중인 다양한 이벤트를 참여하시면, 웨더걸즈 NFT를 먼저 선점할 수 있는 꽃(화이트리스트) 역할을 지급해 드립니다." />
          <FAQAccodion question="Q. 날씨 구슬은 무엇인가요?" answer="A. 소녀들은 구슬에 날씨를 담아 자신들의 행성으로 가져가려는 계획을 가지고 있습니다! 구슬은 홀더들에게 민팅 이후 에어드랍 될 예정이며 추후에 홀더들에게 이점이 있도록 계획하고 있습니다." />
        </FAQColumnDiv>
      </FAQRowDiv>
    </FAQSection>
  );
}

export default FAQ;
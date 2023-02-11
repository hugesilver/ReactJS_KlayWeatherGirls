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

function FAQ() {
  return (
    <FAQSection>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/faq/title.png" />
      </div>
    </FAQSection>
  );
}

export default FAQ;
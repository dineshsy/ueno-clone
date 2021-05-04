import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
`;

export const HeroText = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h6 {
    font-size: 0.87rem;
    align-self: start;
    color: #757575;
  }
  h1 {
    align-self: center;
    font-size: 3.5rem;
    color: #252525;
    font-weight: 100;
  }
  h1.light {
    font-weight: 100;
    color: #8d8f9a;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  padding: 0rem 2rem;
  width: 70%;
  height: 100%;
  background-image: url("https://images.prismic.io/ueno-www/fa980adb-f824-42d6-aae0-6df1d38aa6fc_espn-poster.jpg?auto=compress,format");
  background-size: cover;
  background-position: 0 0;
`;

export const BgCircle = styled.div`
  height: 100vh;
  position: absolute;
  border-radius: 50%;
  transform: translateX(50%);
  left: 0;
  top: 0;
`;

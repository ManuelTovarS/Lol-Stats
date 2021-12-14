import styled from "styled-components";

export const ContainerTitleImage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
  margin-right: 4rem;

  @media only screen and (max-width: 600px) {
    height: 85vh;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    justify-content: center;
  }
  @media only screen and (min-width: 600px) {
    height: 85vh;
    justify-content: center;
  }
  @media only screen and (min-width: 992px) {
    height: 80vh;
  }
  @media only screen and (min-width: 1200px) {
    height: 90vh;
    justify-content: start;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  line-height: 12rem;

  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
    line-height: 5rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 5.5rem;
    line-height: 8rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 6rem;
    line-height: 9rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 8rem;
  }
`;

export const ContainerImage = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 20rem;
    height: 20rem;
  }
  @media only screen and (min-width: 600px) {
    width: 30rem;
    height: 30rem;
    left: 20%;
  }
  @media only screen and (min-width: 992px) {
    width: 35rem;
    height: 35rem;
    left: 25%;
  }
  @media only screen and (min-width: 1200px) {
    width: 40rem;
    height: 40rem;
    left: 30%;
  }
`;

export const BackgroundColorImage = styled.div`
  max-height: 100%;
  max-width: 100%;
  background: linear-gradient(180deg, #e1c635 0%, rgba(80, 96, 252, 0) 100%);
  filter: blur(15px);
  border-radius: 20rem;
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  z-index: 1;
`;
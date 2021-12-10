import styled from "styled-components";

export const ContainerTitleImage = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  }

  @media only screen and (min-width: 992px) {
    height: 80vh;
  }

  @media only screen and (min-width: 1200px) {
    height: 90vh;
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

export const Image = styled.img`
  position: absolute;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    width: 15rem;
    position: static;
  }
  @media only screen and (min-width: 600px) {
    left: 20%;
    width: 30rem;
  }
  @media only screen and (min-width: 992px) {
    left: 30%;
    width: 40rem;
  }
  @media only screen and (min-width: 1200px) {
    left: 30%;
    width: 45rem;
  }
`;

import React from "react";
import styled from "styled-components";
import champion from "../resources/Nautilus.png";

const ContainerTitleImage = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 7rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`

  width: 30rem;

  @media (max-width: 600px) {
    width: 22rem;
  }
`;

const TextFieldImage = () => {
  return (
    <ContainerTitleImage>
      <Title>
        Your <br /> History <br /> In one place
      </Title>
      <Image src={champion} alt="Image of a champion" />
    </ContainerTitleImage>
  );
};

export default TextFieldImage;

import React from "react";
import styled from "styled-components";
import champion from "../resources/Nautilus.png";

const ContainerTitleImage = styled.div`
`;

const Title = styled.h1`
  margin: 0;
  padding-left: 4rem;
  text-align: left;
  line-height: 170px;
  font-size: 150px;
  width: 100%;
  max-width: 860px;
  color: white;
`;

const Image = styled.img`

`;

const TextFieldImage = () => {
  return (
    <ContainerTitleImage>
      <Title>
        Your History <br /> In one place
      </Title>
        <Image src={champion} alt="Champion Image" />
    </ContainerTitleImage>
  );
};

export default TextFieldImage;

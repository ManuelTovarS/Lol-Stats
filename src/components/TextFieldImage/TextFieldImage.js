import React from "react";
import { ContainerTitleImage, Title, Image } from "./TextFieldImage.styled";

const TextFieldImage = ({championImg}) => {
  return (
    <ContainerTitleImage>
      <Title>
        Your <br /> History <br /> In one place
      </Title>
      <Image src={championImg} alt="Image of a champion" />
    </ContainerTitleImage>
  );
};

export default TextFieldImage;
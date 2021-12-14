import React from "react";
import {
  ContainerTitleImage,
  Title,
  ContainerImage,
  Image,
  BackgroundColorImage,
} from "./TextFieldImage.styled";

const TextFieldImage = ({ championImg }) => {
  return (
    <ContainerTitleImage>
      <Title>
        Your <br /> History <br /> In one place
      </Title>
      <ContainerImage>
        <Image src={championImg} alt="Champion Logo"/>
        <BackgroundColorImage></BackgroundColorImage>
      </ContainerImage>
    </ContainerTitleImage>
  );
};

export default TextFieldImage;

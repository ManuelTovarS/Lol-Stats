import logo from "../resources/league-of-legends.svg";
import styled from "styled-components";

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;

  @media only screen and (max-width: 600px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;

const Image = styled.img`
  height: auto;
  padding-bottom: 0.5rem;

  @media only screen and (max-width: 600px) {
    width: 3.5rem;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 992px) {
    width: 4.5rem;
  }
  @media only screen and (min-width: 1200px) {
    width: 5rem;
  }
`;

const ContainerSearch = styled.div`
  display: flex;
  position: relative;
  padding-left: 0.5rem;

  @media only screen and (max-width: 600px) {
    padding-left: 0rem;
    width: 20rem;
  }
  @media only screen and (min-width: 600px) {
    width: 25rem;
  }
  @media only screen and (min-width: 992px) {
    width: 30rem;
  }
  @media only screen and (min-width: 1200px) {
    width: 30rem;
  }

  input {
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border: 4px solid;
    border-image: linear-gradient(to bottom, #09c0b6, #01668a) 1;
    background-color: #1e2328;
    color: white;
    outline: none;

    @media only screen and (max-width: 600px) {
      padding-left: 0.5rem;
    }
  }

  select {
    position: absolute;
    height: 100%;
    right: 0;
    border-top: 4px solid;
    border-right: 4px solid;
    border-bottom: 4px solid;
    border-left: none;
    border-image: linear-gradient(to bottom, #09c0b6, #01668a) 1;
    background-color: #1e2328;
    color: white;
    outline: none;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderTag>
      <Image src={logo} alt="Logo Lol" />
      <ContainerSearch>
        <input
          type="text"
          placeholder="  Enter a summoner name"
          maxLength="30"
        />
        <select>
          <option>LAN</option>
          <option>LAS</option>
          <option>BR</option>
          <option>NA</option>
          <option>EUW</option>
          <option>EUNE</option>
          <option>OCE</option>
          <option>KR</option>
          <option>JP</option>
          <option>TR</option>
        </select>
      </ContainerSearch>
    </HeaderTag>
  );
};

export default Header;

import logo from "../resources/league-of-legends.svg";
import styled from "styled-components";

const ContainerSearch = styled.div`
  display: flex;
  position: relative;
  width: 310px;
  padding-left: 1rem;

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

    @media (max-width: 600px) {
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

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 600px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Image = styled.img`
  height: auto;
  width: 3.5rem;
  padding-bottom: 0.5rem;
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

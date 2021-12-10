import logo from "../../resources/league-of-legends.svg";
import { HeaderTag, Image, ContainerSearch } from "./Header.styled";

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

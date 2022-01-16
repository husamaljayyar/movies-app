import {
  NavContainer,
  LogoLink,
  NavInnerContainer,
} from "./Nav.Styles";
import { BiCameraMovie } from "react-icons/bi";
import {Typography} from "../../Global.Styles"

function Nav() {
  return (
    <NavContainer as={"header"}>
      <NavInnerContainer>
        <LogoLink to={"/"}>

          <BiCameraMovie style={{ fontSize: "40px", color: "#fff" }} />
          <Typography color={"#fff"} fontSize={'20'} fontWeight={'600'}>watch movies</Typography>
        </LogoLink>
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Nav;

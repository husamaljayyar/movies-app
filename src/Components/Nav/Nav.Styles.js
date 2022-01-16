import styled from "styled-components";
import { FlexRow } from "../../Global.Styles";
import { Link } from "react-router-dom";

export const NavContainer = styled(FlexRow)`
  background: #1c1c1c;
  height: 70px;
`;

export const NavInnerContainer = styled(FlexRow)`
  margin: 0 auto;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  height: auto;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

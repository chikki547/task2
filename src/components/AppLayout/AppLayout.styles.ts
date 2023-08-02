import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
//cssfor the app layout
export const Root = styled("div")`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const LeftSideNavbarWrapper = styled("div")(({ theme }) => ({
  zIndex: 100,
  width: "300px",
  background: `${theme.palette.background.paper}`,
  flex: "0 0 300",
  boxShadow: `${theme.shadows[3]}`,
}));

export const RightSideContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 97;
  overflow-y: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

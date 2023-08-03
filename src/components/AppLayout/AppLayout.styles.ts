import { ButtonBase } from "@mui/material";
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
  background-color: #fffff1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Route = styled(ButtonBase)(({ theme }) => ({
  color: "#000",
  display: "flex",
  width: "100%",
  padding: "8px 16px",
  height: "45px",
  fontSize: 16,
  justifyContent: "flex-start",
  borderBottom: "1px solid #ccc",
}));

export const UserDetailsWrapper = styled("div")(({ theme }) => ({
  color: "#000",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "8px 16px",
  fontSize: 16,
  justifyContent: "flex-start",
  borderBottom: "1px solid #ccc",
  backgroundColor: "#fffff1",
}));

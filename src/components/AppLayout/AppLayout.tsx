import React, { useEffect, useCallback } from "react";
import {
  Root,
  LeftSideNavbarWrapper,
  RightSideContainer,
  StyledLink,
  Route,
  UserDetailsWrapper,
} from "./AppLayout.styles";
import AppRoutes from "../AppRoutes/AppRoutes";
import { Typography } from "@mui/material";
import { getApi } from "../../services/api/callApis";
import { useGetUser } from "../../context/UserDataProvider";
import { UserOutlined, PhoneFilled, MailTwoTone } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

type Props = {};
export const x = Math.floor(Math.random() * 10) + 1;

const AppLayout = (props: Props) => {
  const { data, setData } = useGetUser();
  const location = useLocation();

  useEffect(() => {
    const userData = async () => {
      const data = await getApi(`/users/${x}`);
      setData(data);
    };
    userData();
  }, [setData]);

  return (
    <Root>
      <LeftSideNavbarWrapper>
        <UserDetailsWrapper>
          <div style={{ display: "flex" }}>
            <UserOutlined /> &nbsp;
            <Typography
              data-testid="username"
              variant="body2"
              color="textPrimary"
            >
              {data?.username}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <PhoneFilled />
            &nbsp;
            <Typography data-testid="phone" variant="body2" color="textPrimary">
              {data?.phone}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <MailTwoTone />
            &nbsp;
            <Typography id="address" variant="body2" color="textPrimary">
              {data?.address?.suite}, {data?.address?.street},{" "}
              {data?.address?.city}
            </Typography>
          </div>
        </UserDetailsWrapper>

        <StyledLink to={`/dashboard`} key={`/dashboard`}>
          <Route
            style={{
              backgroundColor:
                location.pathname === "/dashboard" ? "#fffff1" : "#fff",
            }}
          >
            Dashboard
          </Route>
        </StyledLink>
        <StyledLink to={`/blogs`} key={`/blogs`}>
          <Route
            style={{
              backgroundColor:
                location.pathname === "/blogs" ? "#fffff1" : "#fff",
            }}
          >
            Blogs
          </Route>
        </StyledLink>
      </LeftSideNavbarWrapper>
      <RightSideContainer>
        <AppRoutes />
      </RightSideContainer>
    </Root>
  );
};

export default AppLayout;

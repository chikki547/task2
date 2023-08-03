import React, { useEffect, useState } from "react";
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
const x = Math.floor(Math.random() * 10) + 1;

const AppLayout = (props: Props) => {
  const { data, setData } = useGetUser();
  const location = useLocation();
  console.log({ location });
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
          <Typography variant="body2" color="textPrimary">
            <UserOutlined /> {data?.username}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            <PhoneFilled /> {data?.phone}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            <MailTwoTone /> {data?.address?.suite}, {data?.address?.street},{" "}
            {data?.address?.city}
          </Typography>
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

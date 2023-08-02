import React, { useEffect, useState } from "react";
import {
  Root,
  LeftSideNavbarWrapper,
  RightSideContainer,
  StyledLink,
} from "./AppLayout.styles";
import AppRoutes from "../AppRoutes/AppRoutes";
import { Typography } from "@mui/material";
import { getApi } from "../../services/api/callApis";
import { useGetUser } from "../../context/UserDataProvider";

type Props = {};
const x = Math.floor(Math.random() * 10) + 1;

const AppLayout = (props: Props) => {
  const { data, setData } = useGetUser();

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
        <Typography variant="body2" color="textPrimary">
          Name : {data?.username}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Phone No : {data?.phone}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Address : {data?.address?.suite}, {data?.address?.street},{" "}
          {data?.address?.city}
        </Typography>
        <StyledLink to={`/dashboard`} key={`/dashboard`}>
          <Typography variant="body2" color="textPrimary">
            Dashboard
          </Typography>
        </StyledLink>
        <StyledLink to={`/blogs`} key={`/blogs`}>
          <Typography variant="body2" color="textPrimary">
            Blogs
          </Typography>
        </StyledLink>
      </LeftSideNavbarWrapper>
      <RightSideContainer>
        <AppRoutes />
      </RightSideContainer>
    </Root>
  );
};

export default AppLayout;

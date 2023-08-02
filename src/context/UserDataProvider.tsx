/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface UserDataProviderProps {
  children?: React.ReactNode;
}

export const UserDataContext = React.createContext<any>(undefined);

export const UserDataProvider = (props: UserDataProviderProps) => {
  const [data, setData] = useState();
  const [posts, setPosts] = useState([]);

  return (
    <UserDataContext.Provider value={{ data, setData, posts, setPosts }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useGetUser = () => React.useContext(UserDataContext);

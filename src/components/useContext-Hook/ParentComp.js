import React from "react";
import Consumer from "./Consumer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ParentComp() {
  return (
    <div>
      <UserContext.Provider value={"Het"}>
        <ChannelContext.Provider value={"Best Channel"}>
          <Consumer />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ParentComp;

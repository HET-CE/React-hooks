import React, { useContext } from "react";
import { UserContext } from "./ParentComp";
import { ChannelContext } from "./ParentComp";

function Consumer() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default Consumer;

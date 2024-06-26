import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      {/* Here We UnMount the HookMouse.js component  */}
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;

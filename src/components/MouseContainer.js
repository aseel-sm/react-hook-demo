import React, { useState } from "react";
import HookMouse from "./HookMouse";
function MouseContainer() {
  const [dispaly, setDispaly] = useState(true);
  return (
    <div>
      <button onClick={() => setDispaly(!dispaly)}> Togle</button>
      {dispaly && <HookMouse />}
    </div>
  );
}

export default MouseContainer;

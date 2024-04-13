import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const logMouse = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", logMouse);
    return () => {
      window.removeEventListener("mousemove", logMouse);
    };
  }, []);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div>
      Hook X={x} Y - {y}
    </div>
  );
};

export default HookMouse;

import React, { useEffect, useState, useRef } from "react";
import { StyledDiv, StyledCanvas } from "./styled";
export default function Canvas() {
  const CanvasRef = useRef(null);
  useEffect(() => {
    const ctx = CanvasRef.current.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  }, []);
  return (
    <StyledDiv>
      <StyledCanvas ref={CanvasRef}></StyledCanvas>
    </StyledDiv>
  );
}

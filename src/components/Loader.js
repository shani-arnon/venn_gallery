import React from "react";
import styled, { keyframes } from "styled-components";

const morph = keyframes`
    0% { transform: rotate(0deg) scale(1); }
	50% { transform:  rotate(45deg) scale(1.2); }
	100% { transform:  rotate(360deg) scale(1); }
`;
const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;
const Loader = () => {
  return (
    <Ball>
      <Inner />
    </Ball>
  );
};
export default Loader;

const Ball = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border: 7px solid lightgrey;
  border-radius: 50%;
  background-color: darkgrey;
  animation: ${morph} 1.5s linear infinite, ${spin} 1s ease-in-out infinite;
`;
const Inner = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  width: 100px;
  height: 100px;
  border: 7px solid transparent;
  border-top: 7px solid lightgrey;
  border-bottom: 7px solid;
  top: -7px;
  left: -7px;
  animation: ${morph} 1.5s linear infinite, ${spin} 1.5s ease-in-out infinite;
`;

// const MovingBall = keyframes`
//      0 % { transform: scale(0); opacity: 1; }
//      100% { transform: scale(1.4); opacity: 0; }
// `;

// const Loader = () => {
//   return <Pulse />;
// };

// const Loader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   font-size: 14px;
//   border: 2px dashed;
//   height: 50px;
//   width: 100px;
// `;
// const Pulse = styled.div`
//   display: flex;
//   background-color: #f31a6a8e;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   position: relative;
//   .after,
//   .before {
//     display: flex;
//     position: absolute;
//     background-color: rgb(109, 14, 117);
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
//     animation: ${MovingBall} 3s linear infinite;
//   }
//   .after {
//     animation: ${MovingBall} 2s linear infinite;
//     animation-delay: 1s;
//   }
// `;

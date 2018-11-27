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
    <Box>
      <Ball>
        <Inner />
      </Ball>
    </Box>
  );
};
export default Loader;

const Box = styled.div`
display: flex;
flex-basis: 100%;
justify-content: center;
align-items: center;
margin: 2.5rem;
`
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


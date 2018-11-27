import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class ImageLoader extends Component {
  state = {
    is_loading: true,
  };
  on_loaded = () => {
    this.setState({ is_loading: false });
  };
  shouldComponentUpdate(nextProps) {
    const { url } = this.props;
    const { url: next_url } = nextProps;
    if (url !== next_url) this.setState({ is_loading: true });
    return true;
  }
  render() {
    const { url } = this.props;
    return (
      <Box>
        <Spinner show={this.state.is_loading} />
        <Image
          src={url}
          onLoad={this.on_loaded}
          show={!this.state.is_loading}
        />
      </Box>
    );
  }
}

const Box = styled.div`
  margin: 10px;
  position: relative;
`;
const Image = styled.img`
  visibility: ${p => (p.show === true ? "visible" : "hidden")};
  background: rgba(255, 255, 255 0.35);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-radius: 5px;
  object-fit: cover;
  object-position: 50% 50%;
  width: 200px;
  height: 200px;
`;

const scaleout = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1.0);
    opacity: 1;
  }
`;

const Spinner = styled.div`
  position: absolute;
  opacity:.15;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius: 0.75rem;
  background-color: #eee;
  visibility: ${p => (p.show === true ? "visible" : "hidden")};
  animation: ${scaleout} 1s ease-in-out infinite;
  // width: 40px;
  // height: 40px;
  // margin: 100px auto;
`;

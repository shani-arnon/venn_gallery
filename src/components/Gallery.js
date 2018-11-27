import React, { Component } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import ImageLoader from "./ImageLoader";

export default class Gallery extends Component {
  render_images() {
    return this.props.images.map((image, i) => (
      <ImageLoader key={i} url={image.url} />
    ));
  }
  render() {
    return (
      <StyledGallery>
        <GalleryBox>
          {this.render_images()}
          {this.props.loading && <Loader />}
        </GalleryBox>
      </StyledGallery>
    );
  }
}

const StyledGallery = styled.div`
  height: 80%;
  width: 100%;
  margin-top: 3rem;
`;
const GalleryBox = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  /* position: absolute; */
  margin-top: 10rem;
`;

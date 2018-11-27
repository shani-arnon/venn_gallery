import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Search from "./Search";
import Gallery from "./Gallery";

export default class App extends Component {
  state = {
    word: '',
    page: 0,
    per_page: 30,
    images: [],
    loading: false,
  };
  //This is where I fetch the urls
  get_data_from_flickr = (item, callback, page) => {
    const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1&tags=${item}&page=${this.state.page}&per_page=${this.state.per_page}`;
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const images = json.photos.photo.map(
          ({ id, server, farm, secret }) => ({
            id: id,
            url: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
          })
        );
        callback(images);
      })
      .catch(ex => {
        console.log("parsing failed", ex);
      });
  };
  scrolling = (e) => {
    if (e.target.scrollingElement.scrollTop + e.target.scrollingElement.clientHeight === e.target.scrollingElement.scrollHeight) {
      let next_page = this.state.page + 1;
      this.setState({
        page: next_page
      });
      this.get_data();
      e.target.scrollingElement.scrollTop = 0;
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling);
  }

  get_data = (item = '') => {
    const new_search = (item !== '')
    item = item || this.state.word;
    this.setState({
      word: item,
      loading: true
    });
    console.log('search flicker for ' + item)
    this.get_data_from_flickr(item, images => {
      if (new_search) {
        this.setState({
          images,
          loading: false
        });
      } else {
        // images = this.state.images.concat(images);
        images = [...this.state.images, ...images];
        this.setState({
          images,
          loading: false
        });
      }
    })
  }
  render() {
    return (
      <Box ref={this.ref}>
        <Header>
          <Title>Venn Gallery</Title>
          <Search get_data={this.get_data} />
        </Header>
        <Gallery
          images={this.state.images}
          loading={this.state.loading}
        // get_data={this.get_data}
        />
        <GlobalStyles />
      </Box>
    )
  }
};

const Title = styled.h1`
  height: 3rem;
  text-align: center;
  font-size: 2rem;
  color: #131313;
  letter-spacing: 0.1em;
  &:hover {
    transform: scale(1.07);
  }
`;
const Header = styled.div`
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  flex: 1 1 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  position: fixed;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-image: url("./topography.svg"); */
  /* background-size: 340px, auto; */
   /* min-height: calc(100vh - 100px); */
  background-attachment: fixed;
`;


// get_data_from_pixabay = (item, callback) => {
//   const URL = `https://pixabay.com/api/?key=10388220-bae1999f2b3ed2f71dad860fd&q=${item}`;
//   fetch(URL)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       const images = json.hits.map(hit => ({
//         id: hit.id,
//         url: hit.previewURL
//       }));
//       callback(images);
//     })
//     .catch(ex => {
//       console.log("parsing failed", ex);
//     });
// };



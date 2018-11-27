import React, { Component } from "react";
import styled from "styled-components";
// import debounce from "lodash/debounce";

export default class Search extends Component {

  state = {
    word: "",
  };

  timeout = 0;

  doSearch(e) {
    clearTimeout(this.timeout);
    this.setState({ word: e.target.value });
    this.timeout = setTimeout(() => {
      this.props.get_data(this.state.word);
      // this.debounced_search();
    }, 1000);
  }

  // update_changes = e => {
  //   this.setState({ word: e.target.value });
  //   // this.debounced_search();
  // };
  // search = () => {
  //   this.props.get_data(this.state.word);
  // };
  // debounced_search = debounce(this.search, 300);

  render() {
    return (
      <StyledSearch>
        <Input
          type="text"
          placeholder="Try 'cats'.."
          onChange={e => this.doSearch(e)}
        />
      </StyledSearch>
    );
  }
}

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  padding: 1em;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: ${props => props.inputColor || "darkgrey"};
  border: 1px solid lightgrey;
  height: 1.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  &:hover{
    border: 2px solid;
  }
    &:focus{
    border: 3px solid;
    background: smoke;
  }

`;

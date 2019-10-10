import React, { Component } from 'react';

import RoboList from '../../components/RoboList';
import SearchInput from '../../components/SearchInput';
import Scroll from '../../components/Scroll';
import { Container } from './style';

class Main extends Component{
  state = {
    robots: [],
    searchField: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchInput = e => {
    this.setState({ searchField: e.target.value});

  }

  render(){
    const { robots, searchField } = this.state;

    const robotFilter = robots.filter((user, i) => {
      return user.name.toLowerCase().includes( searchField.toLowerCase());
    });

    return (
      <Container>
        <SearchInput fieldvalue={searchField} searchInput={this.onSearchInput} />
        <Scroll>
          <RoboList robots={robotFilter}/>
        </Scroll>
      </Container>
    );
  }
}

export default Main;

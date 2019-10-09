import React from 'react';

import { HeaderInput } from './style';

const SearchInput = ({ fieldvalue, searchInput }) => {
  return (
    <HeaderInput>
      <h1>RoboFriends</h1>
      <input type="search" placeholder="Search robot" value={fieldvalue} onChange={searchInput}/>
    </HeaderInput>
  );
}

export default SearchInput;

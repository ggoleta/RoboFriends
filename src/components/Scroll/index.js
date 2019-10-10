import React from 'react';
import { ScrollY } from './style';

const Scroll = (props) => {
  return (
    <ScrollY>
      {props.children}
    </ScrollY>
  );
}

export default Scroll;

import React from 'react';

import Robo from '../Robo';
import { Container } from './style';

const RoboList = ({ robots }) => {
  return (
    <Container>
      {robots.map( (user, index) => {
        return <Robo key={index} robo={user}/>
      })}
    </Container>
  );

}

export default RoboList;

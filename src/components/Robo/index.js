import React from 'react';

import { Content, Info } from './style';

const Robo = ({ robo }) => {
  return (
    <Content>
      <img alt="" src={`https://robohash.org/${robo.username}`} />
      <Info>
        <h2>{robo.name}</h2>
        <span>{robo.email}</span>
      </Info>
    </Content>
  );
}

export default Robo;

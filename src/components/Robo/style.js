import styled from 'styled-components';

export const Content = styled.div`
  width: 180px;
  height: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  background: #eee;
  transition: 0.3s linear;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
  }

  img {
    width: 150px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 10px;
    font-size: 16px;
  }

  span {
    display: block;
    font-size: 12px;
  }
`;

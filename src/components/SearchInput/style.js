import styled from 'styled-components';

export const HeaderInput = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Mansalva&display=swap");

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Mansalva', cursive;
    margin: 30px 0;
    text-align: center;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    min-width: 300px;
    border: 1px solid #eee;
  }
`;

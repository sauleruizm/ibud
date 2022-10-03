
import styled from 'styled-components'

export const Navigation = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  background: greenyellow;

  @media all and (max-width: 500px) {
    flex-direction: column;
  }

  @media all and (max-width: 800px) {
    justify-content: space-around;
  }
`
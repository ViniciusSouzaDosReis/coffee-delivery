import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
    }

    button {
      background-color: ${(props) => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
    }
  }
`
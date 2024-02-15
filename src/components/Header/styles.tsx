import styled from "styled-components";

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
    div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      padding: 0.5rem;
      border-radius: 6px;
    }
  }
`;

export const CartContainer = styled.div`
  position: relative;

  button {
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 0.5rem;
    border-radius: 6px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const CoffeeImage = styled.div`
  width: 4rem;

  img {
    width: 100%;
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  & > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding-inline: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    text-transform: uppercase;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }
`;

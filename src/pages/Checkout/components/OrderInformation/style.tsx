import styled from "styled-components";

export const OrderInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1.5;
`;

export const OrderInformationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  hr {
    border-color: ${(props) => props.theme["base-button"]};
  }

  & > button {
    padding: 0.75rem 0.25rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["white"]};
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const CoffeeCard = styled.div`
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

export const PaymentInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & > div:first-child {
      font-size: 0.875rem;
    }
  }

  strong {
    font-size: 1.25rem;
  }
`;

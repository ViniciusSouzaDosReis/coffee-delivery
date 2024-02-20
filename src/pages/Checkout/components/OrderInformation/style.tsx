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

import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const UserInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const Title = styled.strong`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.125rem;
  font-weight: bold;
  font-family: "Baloo 2";
  margin-bottom: 1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-inline: 2.5rem;
`;

export const InformationContainerWithIcon = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
  }
`;

export const LocationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2.5rem;
`;

export const FormLocation = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LineInForm = styled.div`
  display: flex;
  gap: 0.75rem;

  & > :first-child {
    flex: 1;
    min-width: 12.5rem;
  }

  & > :nth-child(2) {
    flex: 3 0 auto;
  }

  & > :nth-child(3) {
    flex: 0.5;
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2.5rem;
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentCard = styled.label`
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  input:checked + div {
    box-shadow: 0 0 0px 2px ${(props) => props.theme["purple"]};
  }

  span {
    font-size: 0.75rem;
  }
`;

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

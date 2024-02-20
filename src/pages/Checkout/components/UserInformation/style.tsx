import styled from "styled-components";

export const UserInformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 2;
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

export const FormLocation = styled.div`
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

import styled from "styled-components";

export const Title = styled.strong`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.125rem;
  font-weight: bold;
  font-family: "Baloo 2";
  margin-bottom: 1rem;
`;

export const CheckoutContainer = styled.div`
  & > form {
    display: flex;
    gap: 2rem;
  }
`;

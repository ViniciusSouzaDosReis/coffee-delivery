import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme["base-card"]};

  > span:first-child {
    position: relative;
    bottom: 1.25rem;
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    width: 13.5rem;

    h3 {
      color: ${(props) => props.theme["base-subtitle"]};

      font-family: "Baloo 2";
      font-size: 1.25rem;
      font-style: normal;
      line-height: 130%;
    }

    p {
      color: ${(props) => props.theme["base-label"]};

      text-align: center;
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`;

export const TagTypeCoffeeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const TagTypeCoffee = styled.span`
  padding: 0.25rem 0.5rem;

  border-radius: 100px;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;

export const BuyContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 13rem;

  margin-top: 2.06rem;

  > span:first-child {
    color: ${(props) => props.theme["base-text"]};

    font-size: 0.875rem;
    line-height: 130%;

    strong {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`;

export const ActionsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;

    border-radius: 0.375rem;
    background: ${(props) => props.theme["purple-dark"]};
  }
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  height: 2.375rem;

  padding: 0.5rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme["base-button"]};

  color: ${(props) => props.theme["base-title"]};
  font-size: 1rem;
  line-height: 130%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

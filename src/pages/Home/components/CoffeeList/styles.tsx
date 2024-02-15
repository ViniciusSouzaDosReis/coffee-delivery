import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  padding-block: 2rem;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 3.375rem;

    font-family: "Baloo 2";
    font-size: 2rem;
  }
`;

export const CoffeeCardContainer = styled.article`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

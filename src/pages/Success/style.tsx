import styled from "styled-components";

export const CongratulationText = styled.div`
  margin-top: 5.375rem;
  margin-bottom: 2rem;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2";
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const OrderInformationAndIlustration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const OrderInformationBorder = styled.div`
  position: relative;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  padding: 1px;
  border-radius: 6px 36px 6px 36px;
  min-width: 32.875rem;
`;

export const OrderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: white;
`;

export const OrderInformationLine = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme[props.$color]};
  }
`;

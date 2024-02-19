import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  min-width: 3.75rem;
`;

export const InputContent = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: solid 1px ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
    box-shadow: 0 0 0 0;
  }
`;

export const OptionalText = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.75rem;
  font-style: italic;
`;

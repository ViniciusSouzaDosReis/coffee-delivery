import { InputHTMLAttributes } from "react";
import { InputContainer, OptionalText, InputContent } from "./styles";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ required = false, style, ...props }, ref) => {
    return (
      <InputContainer style={style}>
        <InputContent ref={ref} {...props} />
        {required ? "" : <OptionalText>Opcional</OptionalText>}
      </InputContainer>
    );
  }
);

export { Input };

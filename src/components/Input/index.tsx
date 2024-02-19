import { InputHTMLAttributes } from "react";
import { InputContainer, OptionalText, InputContent } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ required = false, style, ...props }: InputProps) {
  return (
    <InputContainer style={style}>
      <InputContent {...props} />
      {required ? "" : <OptionalText>Opcional</OptionalText>}
    </InputContainer>
  );
}

export { Input };

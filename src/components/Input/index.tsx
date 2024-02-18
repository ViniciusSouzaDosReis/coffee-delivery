import { InputHTMLAttributes } from "react";
import { InputContainer, OptionalText, InputContent } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ required = false, ...props }: InputProps) {
  return (
    <InputContainer>
      <InputContent {...props} />
      {required ? "" : <OptionalText>Opcional</OptionalText>}
    </InputContainer>
  );
}

export { Input };

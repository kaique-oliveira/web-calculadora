import { ReactElement } from "react";
import { ButtonStyledProp, Container } from "./styles";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonStyledProp;
  text?: string;
  icon?: ReactElement;
};

export function Button({ variant = "TEXT", text = "", icon, ...rest }: Props) {
  return (
    <Container {...rest} $variant={variant}>
      {text && text} {icon && icon}
    </Container>
  );
}

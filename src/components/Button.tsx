import { ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <button>enviar</button>
}

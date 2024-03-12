import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '',
  secondary: '',
  success: '',
  danger: '',
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`

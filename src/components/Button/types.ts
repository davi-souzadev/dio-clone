export interface IButton extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
  variant?: string
  onClick?: () => void
}

export interface IButtonStyled {
  variant: string
}
interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
}

const Button = (props: ButtonProps) => {
  return <button type="button" {...props}>{props.children}</button>
}

export default Button

import { Button, ButtonProps } from "@mui/material"

type MyButtonProps = ButtonProps & {
  buttonTitle: string
}

const MyButton = ({ buttonTitle, onClick, ...rest }: MyButtonProps) => {
  return (
    <Button onClick={onClick} {...rest}>
      {buttonTitle}
    </Button>
  )
}

export default MyButton

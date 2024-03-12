import { TextField, TextFieldProps } from "@mui/material"

type MyTextInputProps = TextFieldProps & {
  maxLength: number
}

const MyTextInput = ({ maxLength, ...rest }: MyTextInputProps) => {
  return (
    <TextField
      inputProps={{ maxLength: maxLength }}
      id="outlined-basic"
      variant="outlined"
      {...rest}
    />
  )
}

export default MyTextInput

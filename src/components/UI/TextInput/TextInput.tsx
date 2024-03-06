import { TextField, TextFieldProps } from "@mui/material"

type MyTextInputProps = TextFieldProps

const MyTextInput = ({ ...rest }: MyTextInputProps) => {
  const maxLength = 100
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

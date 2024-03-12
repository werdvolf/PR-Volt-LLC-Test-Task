import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

type MyDropdownProps = {
  label: string
  value: string
  options: string[]
  handleChange: (event: SelectChangeEvent) => void
}

const MyDropdown = ({ label, value, options, handleChange }: MyDropdownProps) => {
  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: "10px" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={handleChange}
          variant="outlined"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default MyDropdown

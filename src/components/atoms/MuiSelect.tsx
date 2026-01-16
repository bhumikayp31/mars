import { TextField, MenuItem } from '@mui/material';

interface MuiSelectProps {
  label: string;
  options: string[];
  value: string;
  required?: boolean;
}

export const MuiSelect = ({ label, options, value, required }: MuiSelectProps) => (
  <TextField
    select
    label={label}
    value={value}
    variant="outlined"
    size="small"
    required={required}
    sx={{ minWidth: 180, bgcolor: 'white' }}
  >
    {options.map((option) => (
      <MenuItem key={option} value={option}>{option}</MenuItem>
    ))}
  </TextField>
);
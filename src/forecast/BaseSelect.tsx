import React from 'react'
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'

export type BaseSelectOption = {
  value: string
  label: string
}

export type BaseSelectProps = {
  label: string
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
  options?: BaseSelectOption[]
  size?: 'small' | 'medium'
}

export default function BaseSelect({
  label,
  value,
  onChange,
  options = [],
  size = 'small',
}: BaseSelectProps): JSX.Element {
  return (
    <FormControl variant="outlined" fullWidth size={size}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

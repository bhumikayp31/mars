import React from 'react'
import { FormControl, Select as MuiSelect, MenuItem, SelectChangeEvent } from '@mui/material'

/**
 * Public value type. '' means "None".
 */
export type YesNoSelectValue = true | false | ''

export type YesNoSelectProps = {
  value: YesNoSelectValue
  /**
   * onChange receives the normalized new value directly (true | false | '').
   */
  onChange: (newValue: YesNoSelectValue) => void
}

/**
 * YesNoSelect
 * - Uses SelectChangeEvent for the internal handler signature (matches MUI).
 * - Normalizes values and exposes a simple API to callers.
 */
export default function YesNoSelect({
  value,
  onChange,
}: YesNoSelectProps): JSX.Element {
  // handleChange now matches MUI's signature: (event: SelectChangeEvent<T>, child?: ReactNode) => void
  const handleChange = (e: SelectChangeEvent<any>, _child?: React.ReactNode) => {
    const v = e?.target?.value

    if (v === '' || v === undefined || v === null) {
      onChange('')
      return
    }
    if (typeof v === 'boolean') {
      onChange(v)
      return
    }
    if (typeof v === 'string') {
      if (v === 'true') {
        onChange(true)
        return
      }
      if (v === 'false') {
        onChange(false)
        return
      }
    }
    onChange(Boolean(v) as YesNoSelectValue)
  }

  return (
    <FormControl variant="outlined" size="small" fullWidth>
      {/* keep MuiSelect<any> to avoid strict generic inference issues */}
      <MuiSelect<any> value={value as any} onChange={handleChange} displayEmpty>
        <MenuItem value={'' as any}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={true as any}>Yes</MenuItem>
        <MenuItem value={false as any}>No</MenuItem>
      </MuiSelect>
    </FormControl>
  )
}

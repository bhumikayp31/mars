import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type SeasonalitySelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'high', label: 'High' },
  { value: 'low', label: 'Low' },
]

export default function SeasonalitySelect({
  value,
  onChange,
}: SeasonalitySelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Seasonality"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

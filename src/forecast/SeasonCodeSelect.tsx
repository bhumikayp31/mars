import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type SeasonCodeSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'S1', label: 'S1' },
  { value: 'S2', label: 'S2' },
]

export default function SeasonCodeSelect({
  value,
  onChange,
}: SeasonCodeSelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Season Code"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

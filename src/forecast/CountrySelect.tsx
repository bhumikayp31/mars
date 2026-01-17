import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type CountrySelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'uk', label: 'United Kingdom' },
  { value: 'us', label: 'United States' },
]

export default function CountrySelect({
  value,
  onChange,
}: CountrySelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Country"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type SubClassSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'tshirts', label: 'T-Shirts' },
  { value: 'shirts', label: 'Shirts' },
]

export default function SubClassSelect({
  value,
  onChange,
}: SubClassSelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Sub Class"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

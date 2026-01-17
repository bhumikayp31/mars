import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type DepartmentSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'women', label: 'Women' },
  { value: 'men', label: 'Men' },
  { value: 'kids', label: 'Kids' },
]

export default function DepartmentSelect({
  value,
  onChange,
}: DepartmentSelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Department*"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

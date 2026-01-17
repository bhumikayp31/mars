import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type ProductLabelSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'pl1', label: 'Label 1' },
  { value: 'pl2', label: 'Label 2' },
]

export default function ProductLabelSelect({
  value,
  onChange,
}: ProductLabelSelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Product Label"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

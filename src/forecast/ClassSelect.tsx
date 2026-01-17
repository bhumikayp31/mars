import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type ClassSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'accessories', label: 'Accessories' },
]

export default function ClassSelect({
  value,
  onChange,
}: ClassSelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Class"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

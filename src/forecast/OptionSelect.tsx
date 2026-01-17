import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type OptionSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

export default function OptionSelect({
  value,
  onChange,
}: OptionSelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Option"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

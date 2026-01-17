import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type BrandSelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'primark', label: 'Primark' },
  { value: 'zara', label: 'Zara' },
  { value: 'hm', label: 'H&M' },
]

export default function BrandSelect({ value, onChange }: BrandSelectProps): JSX.Element {
  return <BaseSelect label="Brand*" value={value} onChange={onChange} options={options} />
}

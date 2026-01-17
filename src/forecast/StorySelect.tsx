import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import BaseSelect, { BaseSelectOption } from './BaseSelect'

export type StorySelectProps = {
  value: string
  onChange: (event: SelectChangeEvent<string>) => void
}

const options: BaseSelectOption[] = [
  { value: 'story1', label: 'Story 1' },
  { value: 'story2', label: 'Story 2' },
]

export default function StorySelect({
  value,
  onChange,
}: StorySelectProps): JSX.Element {
  return (
    <BaseSelect
      label="Story"
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import BaseSelect from './BaseSelect'

const meta: Meta<typeof BaseSelect> = {
  title: 'Components/BaseSelect',
  component: BaseSelect,
}

export default meta

const Template: StoryFn<typeof BaseSelect> = (args) => (
  <div style={{ width: 320 }}>
    <BaseSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Select Option',
  value: '',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
}

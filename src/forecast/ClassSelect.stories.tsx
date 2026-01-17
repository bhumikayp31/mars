import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import ClassSelect from './ClassSelect'

const meta: Meta<typeof ClassSelect> = {
  title: 'Components/ClassSelect',
  component: ClassSelect,
}

export default meta

const Template: StoryFn<typeof ClassSelect> = (args) => (
  <div style={{ width: 320 }}>
    <ClassSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('ClassSelect changed', e.target.value)
  },
}

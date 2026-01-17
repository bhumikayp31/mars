import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import SubClassSelect from './SubClassSelect'

const meta: Meta<typeof SubClassSelect> = {
  title: 'Components/SubClassSelect',
  component: SubClassSelect,
}

export default meta

const Template: StoryFn<typeof SubClassSelect> = (args) => (
  <div style={{ width: 320 }}>
    <SubClassSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('SubClassSelect changed', e.target.value)
  },
}

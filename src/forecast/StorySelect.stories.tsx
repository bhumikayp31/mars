import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import StorySelect from './StorySelect'

const meta: Meta<typeof StorySelect> = {
  title: 'Components/StorySelect',
  component: StorySelect,
}

export default meta

const Template: StoryFn<typeof StorySelect> = (args) => (
  <div style={{ width: 320 }}>
    <StorySelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('StorySelect changed', e.target.value)
  },
}

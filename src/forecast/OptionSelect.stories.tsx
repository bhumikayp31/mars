import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import OptionSelect from './OptionSelect'

const meta: Meta<typeof OptionSelect> = {
  title: 'Components/OptionSelect',
  component: OptionSelect,
}

export default meta

const Template: StoryFn<typeof OptionSelect> = (args) => (
  <div style={{ width: 320 }}>
    <OptionSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('OptionSelect changed', e.target.value)
  },
}

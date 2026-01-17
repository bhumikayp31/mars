import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import CountrySelect from './CountrySelect'

const meta: Meta<typeof CountrySelect> = {
  title: 'Components/CountrySelect',
  component: CountrySelect,
}

export default meta

const Template: StoryFn<typeof CountrySelect> = (args) => (
  <div style={{ width: 320 }}>
    <CountrySelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('CountrySelect changed', e.target.value)
  },
}

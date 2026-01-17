import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import SeasonalitySelect from './SeasonalitySelect'

const meta: Meta<typeof SeasonalitySelect> = {
  title: 'Components/SeasonalitySelect',
  component: SeasonalitySelect,
}

export default meta

const Template: StoryFn<typeof SeasonalitySelect> = (args) => (
  <div style={{ width: 320 }}>
    <SeasonalitySelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('SeasonalitySelect changed', e.target.value)
  },
}

import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import SeasonCodeSelect from './SeasonCodeSelect'

const meta: Meta<typeof SeasonCodeSelect> = {
  title: 'Components/SeasonCodeSelect',
  component: SeasonCodeSelect,
}

export default meta

const Template: StoryFn<typeof SeasonCodeSelect> = (args) => (
  <div style={{ width: 320 }}>
    <SeasonCodeSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('SeasonCodeSelect changed', e.target.value)
  },
}

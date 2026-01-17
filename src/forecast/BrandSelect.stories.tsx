import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import BrandSelect from './BrandSelect'

const meta: Meta<typeof BrandSelect> = {
  title: 'Components/BrandSelect',
  component: BrandSelect,
}

export default meta

const Template: StoryFn<typeof BrandSelect> = (args) => (
  <div style={{ width: 320 }}>
    <BrandSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string> — cast to any here for story smoothness
    // eslint-disable-next-line no-console
    console.log('BrandSelect changed', e.target.value)
  },
}

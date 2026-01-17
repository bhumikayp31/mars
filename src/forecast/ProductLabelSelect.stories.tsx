import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import ProductLabelSelect from './ProductLabelSelect'

const meta: Meta<typeof ProductLabelSelect> = {
  title: 'Components/ProductLabelSelect',
  component: ProductLabelSelect,
}

export default meta

const Template: StoryFn<typeof ProductLabelSelect> = (args) => (
  <div style={{ width: 320 }}>
    <ProductLabelSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('ProductLabelSelect changed', e.target.value)
  },
}

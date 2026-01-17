import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import DepartmentSelect from './DepartmentSelect'

const meta: Meta<typeof DepartmentSelect> = {
  title: 'Components/DepartmentSelect',
  component: DepartmentSelect,
}

export default meta

const Template: StoryFn<typeof DepartmentSelect> = (args) => (
  <div style={{ width: 320 }}>
    <DepartmentSelect {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e: any) => {
    // e is a MUI SelectChangeEvent<string>
    // eslint-disable-next-line no-console
    console.log('DepartmentSelect changed', e.target.value)
  },
}

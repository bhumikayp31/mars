// TableResults.stories.tsx
import React from 'react'
import type { Meta } from '@storybook/react'
import TableResults, { DemoRow } from './TableResults'

const meta: Meta<typeof TableResults> = {
  title: 'Components/TableResults',
  component: TableResults,
}

export default meta

const sampleRows: DemoRow[] = [
  {
    optionName: '270003505_HC00276217 - FLIPFLOP BEAUTY',
    location: '32049',
    locationName: '32049 - HEN_DUBAI HIL...',
    forecastModel: 'Holt-Winters',
    alpha: 0.9,
    beta: 0,
    gamma: 0,
    autoTune: true,
    enableForecast: false,
    enableAutoPublish: true,
  },
  {
    optionName: '270003505_HC00276217 - FLIPFLOP BEAUTY',
    location: '33199',
    locationName: '33199 - HEN_NORTH SQ...',
    forecastModel: 'Holt-Winters',
    alpha: 0.9,
    beta: 0,
    gamma: 0,
    autoTune: true,
    enableForecast: true,
    enableAutoPublish: true,
  },
  {
    optionName: '270003959_HC00175309 - NATE LINEN SH...',
    location: '31694',
    locationName: '31694 - HEN_MOROCCO...',
    forecastModel: 'Holt-Winters',
    alpha: 0.9,
    beta: 0,
    gamma: 0,
    autoTune: true,
    enableForecast: false,
    enableAutoPublish: true,
  },
]

export const Default = () => <TableResults rows={sampleRows} />

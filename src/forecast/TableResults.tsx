// TableResults.tsx
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from '@mui/material'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import YesNoSelect from './YesNoSelect'

export type DemoRow = {
  optionName: string
  location: string
  locationName: string
  forecastModel: string
  alpha: number
  beta: number
  gamma: number
  autoTune: boolean
  enableForecast: boolean
  enableAutoPublish: boolean
}

export type TableResultsProps = {
  rows?: DemoRow[]
  title?: string
}

/**
 * TableResults
 * Props:
 * - rows: array of objects to render
 * - title: optional title shown on top-left (like 'Detach')
 */
export default function TableResults({
  rows = [],
  title = 'Detach',
}: TableResultsProps): JSX.Element {
  // keep a local copy so the table can update entries (e.g. enableForecast)
  const [localRows, setLocalRows] = useState<DemoRow[]>(rows)

  // Keep localRows in sync when parent sends new rows
  useEffect(() => {
    setLocalRows(rows)
  }, [rows])

  // columns inferred from screenshot
  const columns = [
    { id: 'optionName', label: 'Option Name', minWidth: 300 },
    { id: 'location', label: 'Location', minWidth: 120 },
    { id: 'locationName', label: 'Location Name', minWidth: 320 },
    { id: 'forecastModel', label: 'Forecast Model', minWidth: 140 },
    { id: 'alpha', label: 'Alpha', minWidth: 80, align: 'center' },
    { id: 'beta', label: 'Beta', minWidth: 80, align: 'center' },
    { id: 'gamma', label: 'Gamma', minWidth: 80, align: 'center' },
    { id: 'autoTune', label: 'Auto Tune Switch', minWidth: 140, align: 'center' },
    { id: 'enableForecast', label: 'Enable Forecast', minWidth: 140, align: 'center' },
    { id: 'enableAutoPublish', label: 'Enable Auto Publish', minWidth: 160, align: 'center' },
  ] as const

  return (
    <Box sx={{ mt: 3 }}>
      {/* header with title and small control */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <OpenInFullIcon fontSize="small" />
          <Typography variant="subtitle2">{title}</Typography>
        </Box>
        <Typography variant="caption">{localRows.length} out of {localRows.length} records</Typography>
      </Box>

      {/* scroll container: horizontal when table is wider than screen */}
      <Paper elevation={1}>
        <TableContainer sx={{ maxHeight: 420, overflowX: 'auto' }}>
          <Table stickyHeader sx={{ minWidth: 1200 }}>
            <TableHead>
              <TableRow>
                {/* extra left empty cell like screenshot */}
                <TableCell sx={{ backgroundColor: '#e9f2fb', width: 40 }} />
                {columns.map((col) => (
                  <TableCell
                    key={col.id}
                    align={(col as any).align || 'left'}
                    sx={{
                      backgroundColor: '#2f9be6',
                      color: 'white',
                      fontWeight: 600,
                      minWidth: col.minWidth,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {localRows.map((row, idx) => (
                <TableRow hover key={idx}>
                  <TableCell />
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.optionName}</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.location}</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.locationName}</TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.forecastModel}</TableCell>

                  <TableCell align="center">
                    <Box component="span" sx={{ display: 'inline-block', px: 1, bgcolor: '#f1f7fb', borderRadius: 1 }}>
                      {row.alpha}
                    </Box>
                  </TableCell>

                  <TableCell align="center">
                    <Box component="span" sx={{ display: 'inline-block', px: 1, bgcolor: '#f1f7fb', borderRadius: 1 }}>
                      {row.beta}
                    </Box>
                  </TableCell>

                  <TableCell align="center">
                    <Box component="span" sx={{ display: 'inline-block', px: 1, bgcolor: '#f1f7fb', borderRadius: 1 }}>
                      {row.gamma}
                    </Box>
                  </TableCell>

                  <TableCell align="center">
                    <Typography variant="body2">{row.autoTune ? 'Yes' : 'No'}</Typography>
                  </TableCell>

                  <TableCell align="center" sx={{ minWidth: 140 }}>
                    {/* YesNoSelect now calls onChange(newValue: true|false|'') */}
                    <YesNoSelect
                      value={row.enableForecast}
                      onChange={(newValue) => {
                        setLocalRows((prevRows) =>
                          prevRows.map((r, i) =>
                            i === idx ? { ...r, enableForecast: newValue === '' ? false : newValue } : r
                          )
                        )
                      }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Typography variant="body2">{row.enableAutoPublish ? 'Yes' : 'No'}</Typography>
                  </TableCell>
                </TableRow>
              ))}

              {localRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} align="center" sx={{ py: 6 }}>
                    No records to show
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

// Corrected relative imports
import BrandSelect from '../forecast/BrandSelect';
import DepartmentSelect from '../forecast/DepartmentSelect';
import ClassSelect from '../forecast/ClassSelect';
import SubClassSelect from '../forecast/SubClassSelect';
import OptionSelect from '../forecast/OptionSelect';
import CountrySelect from '../forecast/CountrySelect';
import ProductLabelSelect from '../forecast/ProductLabelSelect';
import StorySelect from '../forecast/StorySelect';
import SeasonalitySelect from '../forecast/SeasonalitySelect';
import SeasonCodeSelect from '../forecast/SeasonCodeSelect';
import TableResults from '../forecast/TableResults';

/**
 * Type for a single row displayed in the results table.
 */
type DemoRow = {
  optionName: string;
  location: string;
  locationName: string;
  forecastModel: string;
  alpha: number;
  beta: number;
  gamma: number;
  autoTune: boolean;
  enableForecast: boolean;
  enableAutoPublish: boolean;
};

export default function Forecast(): JSX.Element {
  const [brandValue, setBrandValue] = useState<string>('primark');
  const [departmentValue, setDepartmentValue] = useState<string>('');
  const [classValue, setClassValue] = useState<string>('');
  const [subClassValue, setSubClassValue] = useState<string>('');
  const [optionValue, setOptionValue] = useState<string>('');
  const [countryValue, setCountryValue] = useState<string>('');
  const [productLabel, setProductLabel] = useState<string>('');
  const [story, setStory] = useState<string>('');
  const [seasonality, setSeasonality] = useState<string>('');
  const [seasonCode, setSeasonCode] = useState<string>('');

  const [showTable, setShowTable] = useState<boolean>(false);
  const [tableRows, setTableRows] = useState<DemoRow[]>([]);

  const onApply = (): void => {
    const payload = {
      brandValue,
      departmentValue,
      classValue,
      subClassValue,
      optionValue,
      countryValue,
      productLabel,
      story,
      seasonality,
      seasonCode,
    };

    const demoRows: DemoRow[] = [
      {
        optionName: `${payload.brandValue || 'Unknown'}_${payload.optionValue || 'OPT1'} - SAMPLE A`,
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
        optionName: `${payload.brandValue || 'Unknown'}_${payload.optionValue || 'OPT2'} - SAMPLE B`,
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
    ];

    setTableRows(demoRows);
    setShowTable(true);
    console.log('Apply Payload:', payload);
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#f3f6f8', minHeight: '100vh' }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Merchandise Allocation & Replenishment System
      </Typography>

      <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 1, boxShadow: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Forecast Parameters
        </Typography>

        {/* MUI v6+ uses 'container' but 'item' is no longer required. 
            Sizes are passed directly to the child Grid components.
        */}
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 2 }}>
            <BrandSelect value={brandValue} onChange={(e: any) => setBrandValue(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <DepartmentSelect value={departmentValue} onChange={(e: any) => setDepartmentValue(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <ClassSelect value={classValue} onChange={(e: any) => setClassValue(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <SubClassSelect value={subClassValue} onChange={(e: any) => setSubClassValue(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <OptionSelect value={optionValue} onChange={(e: any) => setOptionValue(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <CountrySelect value={countryValue} onChange={(e: any) => setCountryValue(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <ProductLabelSelect value={productLabel} onChange={(e: any) => setProductLabel(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <StorySelect value={story} onChange={(e: any) => setStory(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <SeasonalitySelect value={seasonality} onChange={(e: any) => setSeasonality(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <SeasonCodeSelect value={seasonCode} onChange={(e: any) => setSeasonCode(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, md: 1 }}>
            <Button variant="outlined" onClick={onApply} fullWidth sx={{ height: 40 }}>
              Apply
            </Button>
          </Grid>
        </Grid>
      </Box>

      {showTable && <TableResults rows={tableRows} title="Detach" />}
    </Box>
  );
}
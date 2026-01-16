import { Box, Button } from '@mui/material';
import { MuiSelect } from '../atoms/MuiSelect';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export const ForecastFilters = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, flexWrap: 'wrap' }}>
      <MuiSelect label="Brand" options={['Hennes & Mauritz']} value="Hennes & Mauritz" required />
      <MuiSelect label="Department" options={['1406 - CH CHILDREN']} value="1406 - CH CHILDREN" required />
      <MuiSelect label="Class" options={[]} value="" />
      <MuiSelect label="Sub Class" options={[]} value="" />
      
      <Button 
        variant="contained" 
        startIcon={<RestartAltIcon />}
        sx={{ 
          bgcolor: '#1976D2', 
          textTransform: 'none', 
          fontWeight: 600,
          height: '40px',
          px: 3,
          '&:hover': { bgcolor: '#1565C0' }
        }}
      >
        Reset
      </Button>
    </Box>
  );
};
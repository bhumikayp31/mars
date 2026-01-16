import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemText, Collapse, IconButton, Drawer, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import marsLogo from '../../assets/mars-logo.png'; 
import alshayaLogo from '../../assets/alshaya-logo.png';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const SidebarWithAccordion = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [openSection, setOpenSection] = useState<string | null>('FORECAST');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'FRAMEWORK', label: 'FRAMEWORK' },
    { id: 'SECURITY', label: 'SECURITY' },
    { id: 'JOBS', label: 'JOBS' },
    { id: 'STORE_REPLENISHMENT', label: 'STORE REPLENISHMENT' },
    { id: 'MASTER_DATA', label: 'MASTER DATA' },
    { id: 'FORECAST_SETUP', label: 'FORECAST SETUP' },
    { id: 'ALLOCATION', label: 'ALLOCATION' },
    { 
      id: 'FORECAST', 
      label: 'FORECAST', 
      subItems: [
        { label: 'Sales History Review' },
        { label: 'Forecast Review' },
        { label: 'Forecasting Parameters', path: '/forecast-parameters' }
      ] 
    },
    { id: 'UTILITIES', label: 'UTILITIES' },
    { id: 'ORDER_PROJECTION', label: 'ORDER PROJECTION' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* BLUE RAIL (Always on left) */}
      <Box sx={{ 
        width: 48, 
        bgcolor: '#1976D2', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        py: 1.5, 
        zIndex: 1301 
      }}>
        {/* TOP SYMBOL - Closes the drawer */}
        <IconButton 
          onClick={() => setIsOpen(false)} 
          sx={{ color: 'white', mb: 2, fontSize: '18px', visibility: isOpen ? 'visible' : 'hidden' }}
        >
          ✥
        </IconButton>
        
        {/* HOME ICON - Opens the drawer */}
        <IconButton 
          onClick={() => setIsOpen(true)} 
          sx={{ color: 'white', p: 0.5, bgcolor: isOpen ? 'rgba(255,255,255,0.1)' : 'transparent' }}
        >
          <HomeIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* DRAWER MENU */}
      <Drawer
        variant="persistent"
        open={isOpen}
        sx={{ 
          '& .MuiDrawer-paper': { 
            width: 260, 
            ml: '48px', 
            height: '100%', 
            border: 'none',
            borderRight: '1px solid #EEE',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden' // Important: keeps the scrollbar only in the list area
          } 
        }}
      >
        {/* LOGO SECTION (Fixed at top) */}
        <Box sx={{ p: 2, textAlign: 'center', flexShrink: 0 }}>
          <img 
            src={marsLogo} 
            alt="MARS" 
            style={{ width: '100%', maxWidth: '140px', display: 'block', margin: '0 auto' }} 
          />
          <Typography sx={{ fontSize: '9px', color: '#666', mt: 0.5 }}>
            Empowering Supply Chain
          </Typography>
        </Box>

        <Divider sx={{ mx: 2 }} />

        {/* MIDDLE SECTION (The only scrollable part) */}
        <Box sx={{ 
          flexGrow: 1, 
          overflowY: 'auto', 
          px: 1,
          mt: 1,
          // Custom Thin Scrollbar to match original photo
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#D1D1D1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#B0B0B0',
          },
        }}>
          <List sx={{ py: 0 }}>
            {menuItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItemButton 
                  onClick={() => setOpenSection(openSection === item.id ? null : item.id)}
                  sx={{ py: 0.6, borderBottom: '1px solid #FAFAFA' }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ fontSize: '11px', fontWeight: 700, color: '#555' }} 
                  />
                  <AddIcon sx={{ fontSize: 13, color: '#999' }} />
                </ListItemButton>
                
                {item.subItems && (
                  <Collapse in={openSection === item.id} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {item.subItems.map((sub) => (
                        <ListItemButton 
                          key={sub.label} 
                          sx={{ pl: 4, py: 0.2 }} 
                          onClick={() => sub.path && navigate(sub.path)}
                        >
                          <ListItemText primary={sub.label} primaryTypographyProps={{ fontSize: '10px', color: '#666' }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* FOOTER ALSHAYA (Fixed at bottom) */}
        <Box sx={{ 
          p: 2, 
          borderTop: '1px solid #EEE', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5, 
          pl: 3, 
          flexShrink: 0,
          bgcolor: 'white' 
        }}>
          <img src={alshayaLogo} alt="Logo" style={{ width: '22px', height: 'auto' }} />
          <Typography sx={{ fontWeight: 800, fontSize: '14px', color: '#003366', letterSpacing: '1px' }}>
            ALSHAYA
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};
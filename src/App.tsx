import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SidebarWithAccordion } from './components/organisms/SidebarWithAccordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LogoutIcon from '@mui/icons-material/Logout';

const DRAWER_WIDTH = 260;
const RAIL_WIDTH = 48;

function App() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Dropdown States
  const [roleAnchor, setRoleAnchor] = useState<null | HTMLElement>(null);
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const [userAnchor, setUserAnchor] = useState<null | HTMLElement>(null);

  const closeMenus = () => {
    setRoleAnchor(null);
    setLangAnchor(null);
    setUserAnchor(null);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F5F7F9', overflow: 'hidden' }}>
      <CssBaseline />
      
      <SidebarWithAccordion isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        overflow: 'hidden',
        transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
      }}>
        {/* HEADER - Transition added to prevent text hiding */}
        <AppBar 
          position="fixed" 
          elevation={0} 
          sx={{ 
            bgcolor: 'white', 
            borderBottom: '1px solid #D1D1D1', 
            height: '48px', 
            justifyContent: 'center',
            width: isSidebarOpen ? `calc(100% - ${DRAWER_WIDTH + RAIL_WIDTH}px)` : `calc(100% - ${RAIL_WIDTH}px)`,
            ml: isSidebarOpen ? `${DRAWER_WIDTH + RAIL_WIDTH}px` : `${RAIL_WIDTH}px`,
            transition: 'width 225ms, margin 225ms',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: 2, minHeight: '48px !important' }}>
            <Typography sx={{ color: '#333', fontSize: '15px', fontWeight: 600, whiteSpace: 'nowrap' }}>
              Merchandise Allocation & Replenishment System
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {/* Switch Role */}
              <Box onClick={(e) => setRoleAnchor(e.currentTarget)} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>Switch Role | Administrator</Typography>
                {roleAnchor ? <KeyboardArrowUpIcon sx={{ fontSize: 16, ml: 0.5 }} /> : <ExpandMoreIcon sx={{ fontSize: 16, ml: 0.5 }} />}
              </Box>
              <Menu anchorEl={roleAnchor} open={Boolean(roleAnchor)} onClose={closeMenus}>
                <MenuItem onClick={closeMenus} sx={{ fontSize: '12px' }}>Administrator</MenuItem>
                <MenuItem onClick={closeMenus} sx={{ fontSize: '12px' }}>Planner</MenuItem>
              </Menu>

              {/* Language */}
              <Box onClick={(e) => setLangAnchor(e.currentTarget)} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Typography sx={{ color: '#666', fontSize: '12px' }}>English</Typography>
                {langAnchor ? <KeyboardArrowUpIcon sx={{ fontSize: 16, ml: 0.5 }} /> : <ExpandMoreIcon sx={{ fontSize: 16, ml: 0.5 }} />}
              </Box>
              <Menu anchorEl={langAnchor} open={Boolean(langAnchor)} onClose={closeMenus}>
                <MenuItem onClick={closeMenus} sx={{ fontSize: '12px' }}>English</MenuItem>
                <MenuItem onClick={closeMenus} sx={{ fontSize: '12px' }}>Arabic</MenuItem>
              </Menu>

              {/* User/Logout */}
              <Box onClick={(e) => setUserAnchor(e.currentTarget)} sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: '#1976D2', fontSize: '10px' }}>BY</Avatar>
                <Typography sx={{ color: '#333', fontSize: '12px', fontWeight: 600 }}>bhumika.yp</Typography>
                {userAnchor ? <KeyboardArrowUpIcon sx={{ fontSize: 16 }} /> : <ExpandMoreIcon sx={{ fontSize: 16 }} />}
              </Box>
              <Menu anchorEl={userAnchor} open={Boolean(userAnchor)} onClose={closeMenus}>
                <MenuItem onClick={() => { closeMenus(); navigate('/'); }} sx={{ fontSize: '12px' }}>
                  <LogoutIcon sx={{ fontSize: 16, mr: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1, pt: '48px', overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={
              <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: '#EEE', fontSize: '12vw', fontWeight: 900, opacity: 0.4 }}>MARS</Typography>
              </Box>
            } />
            <Route path="/forecast-parameters" element={<Box sx={{ p: 3 }}>Forecast Parameters Content</Box>} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
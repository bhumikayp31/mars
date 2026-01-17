import React from 'react';
import { Box } from '@mui/material';
import { LoginForm } from '../components/organisms/LoginForm';

interface LoginPageProps {
  setIsAuthenticated: (val: boolean) => void;
}

export const LoginPage = ({ setIsAuthenticated }: LoginPageProps) => {
  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      bgcolor: '#F5F7F9' 
    }}>
      <LoginForm onLoginSuccess={() => setIsAuthenticated(true)} />
    </Box>
  );
};
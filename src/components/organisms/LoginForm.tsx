import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Paper } from '@mui/material';
import marsLogo from '../../assets/mars-logo.png';
import { useNavigate } from 'react-router-dom';

// 1. Define what this component needs from the Parent
interface LoginFormProps {
  onLoginSuccess: () => void; // This will trigger setIsAuthenticated(true) in App.tsx
}

export const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 2. Logic Check
    if (username === 'bhumika' && password === 'newindia') {
      setError('');
      onLoginSuccess(); // This updates the Parent's state
      navigate('/home'); // Move to home page
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400, textAlign: 'center' }}>
      <img src={marsLogo} alt="MARS Logo" style={{ width: '150px', marginBottom: '20px' }} />
      
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#1976D2' }}>
        MARS LOGIN
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box component="form" onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, py: 1.5, bgcolor: '#1976D2', fontWeight: 600 }}
        >
          Login
        </Button>
      </Box>
    </Paper>
  );
};
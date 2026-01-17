import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import DashboardHome from '../pages/DashboardHome';
import Forecast from '../pages/forecast'; // 1. IMPORT YOUR NEW PAGE

interface AppRoutesProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

export const AppRoutes = ({ isAuthenticated, setIsAuthenticated }: AppRoutesProps) => {
  return (
    <Routes>
      {/* LOGIN ROUTE */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? <Navigate to="/home" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />
        } 
      />

      {/* PROTECTED ROUTES */}
      {/* We pass setIsAuthenticated to DashboardHome so it can handle the Logout button */}
      <Route 
        path="/home" 
        element={
          isAuthenticated ? <DashboardHome setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />
        } 
      />

      {/* 2. ADD THE FORECAST ROUTE HERE */}
      <Route 
        path="/forecast-parameters" 
        element={
          isAuthenticated ? <Forecast /> : <Navigate to="/" />
        } 
      />

      {/* CATCH ALL */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
// src/componentes/Alerts/AlertEmail.tsx
import React from 'react';
import { Alert } from '@mui/material';

interface AlertEmailProps {
  children: React.ReactNode;
}

export default function AlertEmail({ children }: AlertEmailProps) {
  return (
    <Alert
      severity="success"
      sx={{
        width: '100%',
        mt: 2,
        color: '#155724',
        background: '#d4edda',
        borderRadius: 1,
      }}
    >
      {children}
    </Alert>
  );
}

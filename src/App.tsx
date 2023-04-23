import React from 'react';
import { Routes } from './routes';
import { AuthContextProvider } from './common/contexts/AuthContext';
import { StatusBar } from 'react-native';

export function App() {
  return (
    <AuthContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </AuthContextProvider>
  );
}

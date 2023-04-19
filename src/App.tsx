import React from 'react';
import { Routes } from './routes';
import { AuthContextProvider } from './common/contexts/AuthContext';
import { SafeAreaView } from 'react-native';

export function App() {
  return (
    <AuthContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </AuthContextProvider>
  );
}

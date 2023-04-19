import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../common/hooks/useAuth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { user, isLoadingUserStorage } = useAuth();

  if (isLoadingUserStorage) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      {user?.username ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

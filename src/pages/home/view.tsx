import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Header } from '../../common/components/header';

import { useHomeViewModel } from './view.model';

export function HomeScreen() {
  const { handleLogout, username } = useHomeViewModel();
  return (
    <View style={styles.container}>
      <Header onSelectSignOUt={handleLogout} />
      <Text> HOME SCREEN - {username} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

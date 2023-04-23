import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Header } from '../../common/components/header';
import { CryptoCard } from '../../common/components/cryptoCard';

import { useHomeViewModel } from './view.model';

export function HomeScreen() {
  const { handleLogout, cryptos } = useHomeViewModel();
  return (
    <View style={styles.container}>
      <Header onSelectSignOUt={handleLogout} />
      <View style={styles.listContainer}>
        <FlatList
          data={cryptos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CryptoCard {...item} onSelect={() => {}} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  flatlist: { paddingBottom: 30, paddingTop: 15 },
});

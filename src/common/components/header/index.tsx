import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export type HeaderProps = {
  onSelectSignOUt: () => void;
};

function Header({ onSelectSignOUt }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onSelectSignOUt}>
        <Text style={styles.text}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Header };

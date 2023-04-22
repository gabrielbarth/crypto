import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { CryptoModel } from '../../models/crypto.model';

export type CryptoCardProps = CryptoModel & {
  onSelect: () => void;
};

function CryptoCard({
  name,
  symbol,
  percent_change_24h,
  price_usd,
  rank,
  onSelect,
}: CryptoCardProps) {
  const percentChangeColor =
    parseFloat(percent_change_24h) > 0 ? '#289942' : '#99311D';

  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.left}>
        <View style={styles.coin}>
          <Text style={styles.text}>#{rank}</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.textSymbol}>{symbol}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>{price_usd}</Text>
        <Text style={[styles.text, { color: percentChangeColor }]}>
          {percent_change_24h}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export { CryptoCard };

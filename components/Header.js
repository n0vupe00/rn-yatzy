import { View, Text } from 'react-native';
import React from 'react';
import styles from '../style/Tyyli';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Yatzy
      </Text>
    </View>
  )
}
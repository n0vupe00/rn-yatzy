import { View, Text } from 'react-native';
import React from 'react';
import styles from '../style/Tyyli';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.author}>
                Author: Pekka Vuokila
            </Text>
        </View>
    )
}
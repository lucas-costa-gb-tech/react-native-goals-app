import { Button, StyleSheet, View } from 'react-native';

import type { HeaderProps } from './header.types';

export default function Header({ onConfirm }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Button title="Add new goal" color="#5e0acc" onPress={onConfirm} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});

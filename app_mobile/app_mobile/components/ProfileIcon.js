import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ProfileIcon() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/usuario.png')}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  icon: {
    width: 160,
    height: 160,
    borderRadius: 60,
    backgroundColor: '#EDE9FE', // Roxo claro
  }
});

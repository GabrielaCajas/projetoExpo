import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/Logoo.png')} 
        style={styles.logo} 
      />


      {/* Ícone menu */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A78BFA', // Roxo do fundo
    flexDirection: 'row',       // Elementos lado a lado
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  logo: {
    width: 60,
    height: 60
  },
  

});

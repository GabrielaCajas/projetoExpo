import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginForm() {
  return (
    <View style={styles.container}>

      {/* Campo E-mail */}
      <TextInput
        placeholder="E-mail ou usuário:"
        style={styles.input}
        placeholderTextColor="#6B7280"
      />

      {/* Campo Senha */}
      <TextInput
        placeholder="Senha:"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#6B7280"
      />

      {/* Esqueci senha */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botão Login */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Cadastrar-se */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Cadastrar-se</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 70,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    marginBottom: 40,
    fontSize: 20,
  },
  forgotPassword: {
    color: '#252160',
    fontSize: 20,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#DDD6FE',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginBottom: 15,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#1F2937',
  },
  registerText: {
    fontSize: 20,
    color: '#252160',
  }
});

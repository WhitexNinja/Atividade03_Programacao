import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContactCard = ({ contato, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.name}>{contato.nome}</Text>
      <Text style={styles.email}>{contato.email}</Text>
      <Text style={styles.phone}>{contato.telefone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    color: '#666',
    fontSize: 14,
  },
  phone: {
    color: '#555',
    fontSize: 14,
  },
});

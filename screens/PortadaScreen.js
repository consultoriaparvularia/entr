import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PortadaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ENT-R</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Ejercicio01')}
      >
        <Text style={styles.botonTexto}>Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, styles.botonSecundario]}
        onPress={() => navigation.navigate('Practica01')}
      >
        <Text style={styles.botonSecundario}>Práctica</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#06283D',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  botonSecundario: {
    backgroundColor: '#8C8C8C', 
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  botonTexto: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

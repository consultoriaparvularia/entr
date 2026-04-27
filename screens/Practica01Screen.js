import React, { useRef } from 'react';
import { View, Pressable, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import styles from '../styles/globalStyles';

export default function Practica01Screen({ navigation }) {
  const soundRef = useRef(null);

  const reproducirSonido = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/pop.mp3')
      );
      soundRef.current = sound;
      await sound.playAsync();
    } catch (e) {
      console.log('Error sonido práctica 1:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={reproducirSonido} style={styles.imagenContainer}>
        <Image
          source={require('../assets/ejemplo1.png')}
          style={styles.imagen}
          resizeMode="contain"
        />
      </Pressable>

      {/* Texto debajo de la imagen */}
      <View style={localStyles.preguntaContainer}>
        <Text style={localStyles.preguntaText}>
          ¿Cuántos dedos tengo escondidos?
        </Text>
      </View>

      <View style={styles.filaInferior}>
        <View style={styles.tituloRS}>
          <Text style={styles.titulo}>Práctica 1</Text>
        </View>

        <View style={styles.botones}>
          <TouchableOpacity
            style={[styles.botonGrande, styles.azul]}
            onPress={() => navigation.navigate('Practica02')}
          >
            <Text style={styles.botonTextoGrande}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  preguntaContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  preguntaText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#06283D',
  },
});

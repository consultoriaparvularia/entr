import React, { useRef } from 'react';
import { View, Pressable, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import styles from '../styles/globalStyles';

export default function Practica02Screen({ navigation }) {
  const soundRef = useRef(null);

  const reproducirSonido = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/pop.mp3')
      );
      soundRef.current = sound;
      await sound.playAsync();
    } catch (e) {
      console.log('Error sonido práctica 2:', e);
    }
  };

  const finalizar = () => {
    navigation.navigate('Portada');
    // Si prefieres impedir volver con “atrás”, usa:
    // navigation.reset({ index: 0, routes: [{ name: 'Portada' }] });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={reproducirSonido} style={styles.imagenContainer}>
        <Image
          source={require('../assets/ejemplo2.png')}
          style={styles.imagen}
          resizeMode="contain"
        />
      </Pressable>

      {/* Texto debajo de la imagen */}
      <View style={localStyles.preguntaContainer}>
        <Text style={localStyles.preguntaText}>
          ¿Cuál es el número que hace falta? Escoge entre los 3 números que están abajo.
        </Text>
      </View>

      <View style={styles.filaInferior}>
        <View style={styles.tituloRS}>
          <Text style={styles.titulo}>Práctica 2</Text>
        </View>

        <View style={styles.botones}>
          <TouchableOpacity
            style={[styles.botonGrande, styles.azul]}
            onPress={finalizar}
          >
            <Text style={styles.botonTextoGrande}>Finalizar</Text>
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
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#06283D',
  },
});

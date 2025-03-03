import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Back from '../../../assets/backradio.jpg';

const BackGround = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Back} style={styles.container} />
      <View style={styles.children}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Hace que el ImageBackground ocupe toda la pantalla
  },
  children: {
    position: 'absolute',  // Esto hace que el contenido esté sobre la imagen
 
  },
});

export default BackGround;

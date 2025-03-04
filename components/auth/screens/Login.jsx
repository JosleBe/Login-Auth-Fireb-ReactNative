import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Field from '../../general/components/Field';
import Btn from '../../general/components/Btn';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../general/utils/firebase.config';
import { useNavigation } from '@react-navigation/native';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (!user.trim() || !password.trim()) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }
    setErrorMessage("");

    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        console.log("Signed in");
        const user = userCredential.user;
        saveUserProfile(user.uid);
        navigation.navigate("HomeProfile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUserProfile = async (uid) => {
    const data = {
      name: "Jose Leonardo",
      phoneNumber: "7775012348",
      photoUrl: "https://radiohead.store/wp-content/uploads/2023/10/radiohead-album-covers-t-shirt-jww1i.jpg",
      carrera: "Desarrollo de Software Multiplataforma",
    };

    try {
      if (uid) {
        const userRef = doc(db, 'users', uid);
        await setDoc(userRef, data, { merge: true });
        console.log("User profile saved:", data);
      } else {
        console.log("Error: Invalid UID");
      }
    } catch (error) {
      console.log("Error saving user profile:", error);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.formContainer}>
        <Text style={styles.greeting}>Hola de nuevo</Text>
        <Text style={styles.subtitle}>Ingresa tus credenciales</Text>
        <View style={{ width: '100%', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Field
            placeholder="Username"
            keyboardType="email-address"
            onChangeText={(text) => setUser(text)}
          />
          <Field
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
        <View style={{ alignItems: 'flex-end', width: '80%', paddingRight: 13 }}>
          <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 13 }}>Olvidaste tu contraseña?</Text>
        </View>
        <Btn btnLabel="Ingresar" textColor="white" press={handleSignIn}></Btn>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#006A42',
  },
  formContainer: {
    backgroundColor: 'black',
    flex: 1,
    borderTopEndRadius: 130,
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    paddingVertical: 110,
    borderWidth: 2,
    borderBottomStartRadius: 130,
  },
  greeting: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    width: '100%',
  },
  subtitle: {
    color: 'grey',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Login;

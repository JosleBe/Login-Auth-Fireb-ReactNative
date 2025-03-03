import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import AvatarProfile from '../components/AvatarProfile';

const Profile = () => {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        if (user) {
            const fetchProfileData = async () => {
                const db = getFirestore();
                const userRef = doc(db, 'users', user.uid); // Referencia al documento del usuario
                const docSnap = await getDoc(userRef); // Obtener el documento de Firestore

                if (docSnap.exists()) {
                    setProfileData(docSnap.data()); // Si existe, almacena los datos en el estado
                } else {
                    console.log("No such document!");
                }
            };

            fetchProfileData(); // Llamar a la función para obtener datos
        }
    }, [user]);

    return (
        <View style={styles.container}>
            {profileData ? (
                <>
                    <AvatarProfile user={profileData} /> {/* Pasa los datos del perfil al componente */}

                </>
            ) : (
                <Text>Cargando perfil...</Text>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        backgroundColor: "white",
        alignItems: 'center',
    },
});

export default Profile;

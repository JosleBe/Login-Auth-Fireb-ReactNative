import { Avatar, Icon } from '@rneui/base';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { green } from '../../general/utils/constants';
import { productos } from '../../general/utils/products';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../general/utils/firebase.config';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const AvatarProfile = ({ user }) => {
    const auth = getAuth();
    const [userCredential, setUseCredential] = useState(auth.currentUser);

    // Agrega productos a Firestore


    /*
    const agregarProductos = async () => {
        console.log("Hola")
        const productosRef = collection(db, 'productos');

        // Usando map para iterar sobre los productos y agregarlos a Firestore
        await Promise.all(
            productos.map(async (producto) => {
                try {

                    await addDoc(productosRef, producto);
                    console.log(`Producto ${producto.nombre} agregado con éxito.`);
                } catch (e) {
                    console.error('Error agregando el producto: ', e);
                }
            })
        );
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUseCredential(user);
                agregarProductos();
            }
        });

        return () => unsubscribe();
    }, []);
    */
    return (
        <View style={styles.container}>
            <View style={{ height: 200, backgroundColor: green, width: 250, alignItems: 'center', borderRadius: 20, justifyContent: 'center' }} >
                <Avatar
                    rounded
                    size={'xlarge'}
                    source={user.photoUrl ?
                        { uri: user.photoUrl } :
                        { uri: 'https://www.gravatar.com/avatar/' }}
                />
                <Text style={{ fontWeight: '800', marginTop: 10, fontSize: 19 }}>
                    {user.name ? user.name : 'Anónimo'}
                </Text>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'start', alignItems: 'center', height: 300, marginTop: 20, width: '100%' }}>
                <Text style={{ fontSize: 21, fontWeight: '500' }}>Mi información</Text>
                <View style={{ flexDirection: 'column', height: 250, marginTop: 10, borderRadius: 20, backgroundColor: 'black' }}>
                    <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center', width: 260, gap: 14 }}>
                        <View>
                            <Icon name="phone" type="font-awesome" size={24} color="white" />
                            <Text style={styles.text}>
                                {user.phoneNumber}
                            </Text>
                        </View>
                        <View>
                            <Icon name="envelope" type="font-awesome" size={24} color="white" />
                            <Text style={styles.text}>
                                {userCredential.email}
                            </Text>
                        </View>
                        <View>
                            <Icon name="graduation-cap" type="font-awesome" size={24} color="white" />
                            <Text style={styles.text}>
                                {user.carrera}
                            </Text>
                        </View>
                    </View>


                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AvatarProfile

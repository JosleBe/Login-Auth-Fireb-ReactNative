import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Btn from '../../general/components/Btn';
import { dark, darkGreen } from '../../general/utils/constants';

const Home = (props) => {
    return (

        <View style={{ backgroundColor:'black', flex:1, alignItems:'center', justifyContent:'center' }}>
            <Text style={{ color: 'white', fontSize: 54, fontWeight: 'bold', textAlign: 'center' }}>
                JosleApp
            </Text>
            <View style={{ marginVertical: 40 }}>
                <Btn bgColor={dark} textColor="white" btnLabel="Inicar sesión" press={() => props.navigation.navigate("Login")} />
                <Btn bgColor={darkGreen} textColor="white" btnLabel="Registrate" />
            </View>

        </View>

    );
};

export default Home;

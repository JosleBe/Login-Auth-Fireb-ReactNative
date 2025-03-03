import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Btn = ({ bgColor, textColor, btnLabel, press}) => {
    return (
        <TouchableOpacity 
        onPress={press}
        style={{
            backgroundColor: bgColor,
            borderRadius: 5,
            alignItems: 'center',
            width: 230,
            borderWidth: 1,  
            justifyContent:'center',
            borderColor: 'white',
            height:40 ,
            marginHorizontal:'auto',
            marginVertical:20
        }}>
            <Text style={{
                color: textColor,
                fontSize: 22,
                fontWeight: 'bold'
            }}> {btnLabel}</Text>

        </TouchableOpacity>
    )
}

export default Btn

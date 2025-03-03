import React from 'react';
import { TextInput } from 'react-native';

const Field = ({ onChangeText, ...props }) => {
  return (
    <TextInput
      onChangeText={onChangeText} 
      {...props}
      style={{
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10,
        width: '75%',
        height: 45,
        backgroundColor: '#006A42',
        marginVertical: 10,
      }}
      placeholderTextColor="black"
    />
  );
};

export default Field;

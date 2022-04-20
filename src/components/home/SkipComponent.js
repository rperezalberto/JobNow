import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SkipComponent = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.btn}>
      <Text style={styles.txtSkip}>Skip</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
      width: 34,
      height: 30
    }, 
    txtSkip:{
        marginVertical: 2,
        fontSize: 17,
        fontWeight: '400',
        color: 'rgba(60, 60, 67, 0.6)',
        lineHeight: 22,
    }
});
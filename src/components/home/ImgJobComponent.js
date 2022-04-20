import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export const ImgJobComponent = ({img}) => {
  return (
    <View style={styles.container}>
        <Image source={img}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        top: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
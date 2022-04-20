import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colores } from '../../theme/colores';
export const HeaderRighttComponent = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{padding: 6}}>
            <Icon name='bell-o' color={colores.black} size={31}/>
            <View style={styles.noBell}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15
    },
    noBell:{
        width: 8,
        height: 8,
        backgroundColor: colores.blue,
        borderRadius:50,
        position: 'absolute',
        right: 3,
        top: 3
    }
})
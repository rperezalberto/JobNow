//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colores } from '../../theme/colores';

// create a component
export const TitleComponent = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.job}>Job</Text>
        <Text style={styles.now}>Now</Text>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 38
    },
    job:{
        fontSize: 34,
        fontWeight: '900',
        lineHeight: 41,
        color: colores.black
    },
    now:{
        fontSize: 34,
        fontWeight: '900',
        lineHeight: 41,
        color: colores.purple
    }
});


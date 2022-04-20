//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colores } from '../../theme/colores';
import {imgLocation} from '../../theme/imgLocation';

export const HeaderLeftComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
               <Image source={imgLocation.user} style={styles.headerImg} />
               <View style={styles.containerTitle}>
                   <Text style={styles.titleHello}>Hello,</Text>
                   <Text style={styles.headerTitle}>Guillem B.</Text>
               </View>
 
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    headerRow:{
        flexDirection: 'row',
        alignItems: 'center'

    },
    headerImg:{
        width: 43,
        height: 43
    },
    containerTitle:{
        marginHorizontal: 10
    },
    titleHello:{
        color: colores.black,
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 18
    },
    headerTitle:{
        color: colores.black,
        fontSize: 20,
        fontWeight: "600",
    }
});

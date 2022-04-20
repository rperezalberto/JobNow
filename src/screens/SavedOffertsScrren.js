//import liraries
import React  from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { DiscoverNewSlider } from '../components/discover/DiscoverNewSlider';
import { colores } from '../theme/colores';

// create a component
export const SavedOffertsScrren = () => {
    return (

        <SafeAreaView  style={styles.container}>
        <ScrollView style={{marginHorizontal: 15}} 
            showsVerticalScrollIndicator= {false}
        >
            <Text style={styles.title}>Saved offers</Text>
            <DiscoverNewSlider/>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colores.white,
      },
      title:{
          marginBottom: 10,
          fontSize: 34,
          fontWeight: '700',
          color: colores.black
      }
});


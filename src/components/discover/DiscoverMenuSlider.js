import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colores } from '../../theme/colores';

export const DiscoverMenuSlider = () => {
  return (
    <>
      <View style={styles.searchContainer}>
            <TextInput
                style={styles.input}
                placeholder='Potition, lication or keywords'
                keyboardType='default'
                />
            <Icon name='search' size={20} style={styles.searchIcon}/>
          </View>
          
          <View style={styles.menuSlider}>
              <TouchableOpacity>
                <Icon name='sliders' color={colores.black} size={30} style={{...styles.btnSliderActive, ...styles.iconSlider}} />
              </TouchableOpacity>

            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={{...styles.btnSliderActive, flexDirection: 'row'}}>
                <Text style={styles.btnTxt}>Designer</Text>
                <Text style={styles.btnTxt}>X</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btnSliderNone}>
                <Text style={styles.btnTxtNone}>Location</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={{...styles.btnSliderActive, flexDirection: 'row'}}>
                <Text style={styles.btnTxt}>Remore</Text>
                <Text style={styles.btnTxt}>X</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.btnSliderNone}>
                <Text style={styles.btnTxtNone}>Company</Text>
              </TouchableOpacity>
            
            </ScrollView>
          </View>
    </>
  )
}

const styles = StyleSheet.create({
    searchContainer:{
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 15
      },
      searchIcon:{
        position: 'absolute', 
        marginLeft: 10
      },
      input:{
        flex: 1,
        paddingHorizontal: 35,
        backgroundColor: colores.greyClaro,
        borderRadius: 10,
        fontWeight: '500'
      },
      menuSlider:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      btnSliderActive:{
        marginHorizontal:4,
        backgroundColor: colores.blueClaro,
        borderRadius: 7,
      },
      btnSliderNone:{
        marginHorizontal:4,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: colores.grey
      },
      iconSlider:{
        paddingHorizontal: 10,
        paddingVertical:8
      },
      btnTxt:{
        marginVertical: 15,
        marginHorizontal: 10,
        color: colores.black,
        fontSize: 12,
        fontWeight: 'bold'
      },
      btnTxtNone:{
        marginVertical: 13,
        marginHorizontal: 10,
        color: colores.grey,
        fontSize: 12,
        fontWeight: 'bold'
      }
    
});
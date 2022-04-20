import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ImgJobComponent } from '../components/home/ImgJobComponent';
import { SkipComponent } from '../components/home/SkipComponent';
import { TitleComponent } from '../components/home/TitleComponent';
import { colores } from '../theme/colores';
import { imgLocation } from '../theme/imgLocation';


export  const Onboarding2Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View>
             <SkipComponent navigation={navigation} />
            <TitleComponent/>
            <ImgJobComponent img={imgLocation.boj2}/>

            <View style={styles.containerDescrip}>
                <Text style={styles.txtDes}>Track all your job applicatons and don’t get lost in the process</Text>
            </View>

            

        </View> 
        <View style={styles.btnPosition}>    
            <TouchableOpacity onPress={() => navigation.navigate('Onboarding1Screen')} style={{...styles.btn, backgroundColor: colores.greyClaro}}>
                <Text style={styles.btnBack}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Onboarding3Screen')} style={{...styles.btn, backgroundColor: colores.blue}}>
                <Text style={styles.btnNext}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },
    containerDescrip:{
        // top: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtDes:{
        fontSize: 26,
        textAlign: 'center',
        color: colores.black,
        lineHeight: 34,
        fontWeight: '400',
        top: 90,
    },
    btnPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: 123,
        height: 44,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        
    },
    btnNext:{
        color: colores.white,
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22
    },
    btnBack:{
        color: colores.black,
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22
    }


});
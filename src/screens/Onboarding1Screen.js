import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ImgJobComponent } from '../components/home/ImgJobComponent';
import { SkipComponent } from '../components/home/SkipComponent';
import { TitleComponent } from '../components/home/TitleComponent';
import { colores } from '../theme/colores';
import { imgLocation } from '../theme/imgLocation';


export  const Onboarding1Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View>
            <SkipComponent navigation={navigation} />
            <TitleComponent/>
            <ImgJobComponent img={imgLocation.boj1}/>

            <View style={styles.containerDescrip}>
                <Text style={styles.txtDes}>Find job offers from the most popular job listing sites</Text>
            </View>

            <View style={styles.social}>
                <Image source={imgLocation.indeed} style={styles.img} />
                <Image source={imgLocation.monster} style={styles.img} />
                <Image source={imgLocation.linkedin } style={styles.img}/>
                <Image source={imgLocation.glassdor } style={styles.img}/>
                <Image source={imgLocation.angelList } style={styles.img}/>
            </View>
        </View> 
        <View style={styles.btnPosition}>    
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Onboarding2Screen') }>
                <Text style={styles.btnTxt}>Next</Text>
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
    social:{
        top: 120,
        marginHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        // backgroundColor: 'red',
        marginHorizontal: 5,
        marginVertical: 5
    },
    btnPosition: {
        alignItems: 'flex-end'
    },
    btn: {
        backgroundColor: colores.blue,
        width: 123,
        height: 44,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    btnTxt:{
        color: colores.white,
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22
    }


});
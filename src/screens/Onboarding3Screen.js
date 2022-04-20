import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ImgJobComponent } from '../components/home/ImgJobComponent';
import { SkipComponent } from '../components/home/SkipComponent';
import { TitleComponent } from '../components/home/TitleComponent';
import { colores } from '../theme/colores';
import { imgLocation } from '../theme/imgLocation';


export  const Onboarding3Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View>
            <SkipComponent navigation={navigation} />
            <TitleComponent/>
            <ImgJobComponent img={imgLocation.boj3}/>

            <View style={styles.containerDescrip}>
                <Text style={styles.txtDes}>Start appliying and get a Job Now!</Text>
            </View>

            <View style={styles.btnLinKedin}>
                <TouchableOpacity>
                    <Text style={styles.btnLinKedinTxt}>Connect with Linkedin</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.txtOr}>or</Text>

        </View> 
        <View style={styles.btnPosition}>    
            <TouchableOpacity onPress={() => navigation.navigate('Onboarding2Screen')} style={styles.btn}>
                <Text style={styles.btnNBackLogin}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}  style={styles.btn}>
                <Text style={styles.btnNBackLogin}>Sing In/Up</Text>
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
    btnLinKedin:{
        backgroundColor: colores.blue,
        top: 100,
        height: 44,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLinKedinTxt:{
        color: colores.white,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '400'
    },
    txtOr:{
        top: 130,
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '400'
    },
    btnPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: 123,
        height: 44,
        borderRadius: 6,
        backgroundColor: colores.greyClaro,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        
    },
    btnNBackLogin:{
        color: colores.black,
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22
    }


});
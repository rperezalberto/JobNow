//import liraries
import React, {useState}  from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colores } from '../theme/colores';
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/FontAwesome';


const imageIcon =[
        { label: "Light", value: "light", imageIcon: <Icon name='moon' size={20} /> }, 
        { label: "Dark", value: "dark", imageIcon: <Icon name='sun' size={20} />}
    ]

    
    export const MyAccountScreen = () => {
    const [theme, setTheme] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: 15}}>
                <Text style={styles.titleAccount}>My Account</Text>

                <Text style={styles.titleProfile}>PROFILE</Text>
                <View style={styles.containerForm}>
                    <TextInput style={styles.input} placeholder='Username'/>
                    <TextInput style={styles.input} placeholder='Name'/>
                    <TextInput style={styles.input} placeholder='Surname'/>
                    <TextInput style={styles.input} placeholder='Email'/>
                    <TextInput style={styles.input} placeholder='Address'/>
                </View>
                <Text style={styles.titleProfile}>SETTINGS</Text>   
                <View style={styles.containerForm}>
                    <Text style={styles.titleProfile}>Appearance:</Text>
                    <SwitchSelector
                        initial={0}
                        onPress={(theme)=> setTheme  (!theme)}
                        textColor={'purple'} //'#7a44cf'
                        selectedColor={'white'}
                        buttonColor={'purple'}
                        borderColor={'purple'}
                        hasPadding
                        options={imageIcon}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        />  
                </View>


            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  colores.greyClaro,
    },
    titleAccount:{
        color: colores.black,
        fontSize: 34, 
        fontWeight: '700',
        lineHeight: 41,
        marginTop: 40
    },
    titleProfile:{
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        marginVertical: 17,
        marginHorizontal:20
    },
    containerForm:{
        backgroundColor: colores.white,
        borderRadius: 15,

    },
    input:{
        marginHorizontal: 15,
        borderBottomWidth:1,
        borderColor: colores.greyClaro,
        fontSize: 15,
        paddingVertical: 10
        // backgroundColor: colores.white
    }
});


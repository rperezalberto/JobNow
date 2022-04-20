import React, {useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import {TitleComponent} from '../components/home/TitleComponent';
import { colores } from '../theme/colores';
import {ViewLoginContext} from '../contexts/MostrarLoginContext';
import {SignInComponent} from '../components/login/SignInComponent';
import {SignUpComponent} from '../components/login/SignUpComponent';


const option =[
    {label:'Register', value:1},
    {label:'Login', value:2},
]



export const LoginScreen = ({navigation}) => {
    const dataViewLogin = useContext(ViewLoginContext);

    const {isEnabled, setIsEnabled} = dataViewLogin;

  return (
    <View style={styles.container}>
        <View style={styles.titlePotition}>
            <TitleComponent/>
        </View>
        <View style={styles.swischSelete}>
            <SwitchSelector 
                onPress={() => setIsEnabled(!isEnabled)}
                options={option}
                initial={0}
                textColor={colores.black}
                buttonColor={colores.white}
                backgroundColor={colores.greyClaro}
                borderColor={colores.blue}
                buttonMargin={3}
                borderRadius={12}
                selectedTextStyle={{
                    color: colores.black,
                    fontWeight: 'bold'
                }}
            />
        </View>
        {
            (isEnabled)? 
                <SignInComponent data={navigation}/>:    
                <SignUpComponent data={navigation}/>
        }
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    titlePotition:{
        marginTop: 80,     
    },
    swischSelete:{
        marginTop: 80
    }
    

});
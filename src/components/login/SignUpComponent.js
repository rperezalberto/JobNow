import React, {useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {colores} from '../../theme/colores';
import Icon from 'react-native-vector-icons/Ionicons';
import {ViewLoginContext} from '../../contexts/MostrarLoginContext';
import {StyleLogin} from '../../assets/styles/StyleLogin';

export const SignUpComponent = (navigation) => {
    const {navigate} = navigation.data;
  const dataViewLogin = useContext(ViewLoginContext);
  const {setIsEnabled} = dataViewLogin;

  const [show, setShow] = useState(true);

  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  return (
    <View style={StyleLogin.container}>
      <View>
        <TextInput 
            style={StyleLogin.input}
            placeholder='Email'
            keyboardType='email-address'
            name='txtEmail'
            onChangeText={(valor) => setTxtEmail(valor)}
        />

        <View style={StyleLogin.groupPass}>
            <TextInput 
                style={StyleLogin.input}
                placeholder='Password'
                keyboardType = 'default'
                secureTextEntry={show}
                autoComplete={'off'}
                name={'txtPassword'}
                onChangeText={(valor) => setTxtPassword(valor)}
            />
            <TouchableOpacity style={StyleLogin.iconViewPass} onPress={() => setShow(!show)}>
              <Icon 
                name='eye-outline'
                size={22}
              />
            </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity onPress={() => navigate('TabsNavigation')}>
          <View style={StyleLogin.btn}>
              <Text style={StyleLogin.btnTxt}>Sign In</Text>
          </View>
        </TouchableOpacity>

      <View style={StyleLogin.containerTxtLogin}>  
          <View style={StyleLogin.txtDirection}>
            <Text style={{...StyleLogin.txt, color: colores.black}}>Forgot password? </Text>
            <Text style={{...StyleLogin.txtLink, ...StyleLogin.txt, color: colores.blue}}>Remember</Text>
          </View>

          <View style={StyleLogin.txtDirection}>
            <Text style={{...StyleLogin.txt, color: colores.black}}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => setIsEnabled(!true)}>
              <Text style={{...StyleLogin.txtLink, ...StyleLogin.txt}}>Register</Text>
            </TouchableOpacity>
          </View>

      </View>

    </View>
  )
}



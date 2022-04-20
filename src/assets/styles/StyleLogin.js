import {StyleSheet} from 'react-native';
import {colores} from '../../theme/colores'

export const StyleLogin = StyleSheet.create({
    container:{
      marginTop: 30
    },
    input:{
      backgroundColor: colores.greyClaro,
      borderRadius: 8,
      paddingLeft: 16,
      marginVertical: 5,
      width: '100%',
    },
    groupPass:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    iconViewPass:{
      right: 0,
      position: 'absolute',
      alignSelf: 'center',
      marginHorizontal: 15
    },
    btn:{
      backgroundColor: colores.blue,
      padding: 14,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginVertical:30 
    },
    btnTxt:{
      color: colores.white,
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22 
    },
    txtDirection:{
      flexDirection: 'row',
      marginVertical: 5
    },
    txt:{
      // color: colores.black,
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22
    },
    txtLink:{
      color: colores.blue
    }
  });
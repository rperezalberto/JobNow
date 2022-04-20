import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { SavedOffertsScrren } from "../screens/SavedOffertsScrren";
import { DetailsScreen } from '../screens/DetailsScreen';
import { colores } from '../theme/colores';

const StackDetails = createStackNavigator();


export const StackNavigationDetails = () => {
    return(
        <StackDetails.Navigator>
            <StackDetails.Screen 
                name="SavedOffertsScrren" 
                component={SavedOffertsScrren} 
                 options={{
                     title: '',
                     headerLeft:() =>(null),
                     headerRight:() =>(
                        <TouchableOpacity style={styles.container}>
                            <Text style={styles.txtEdit}>Edit</Text>
                        </TouchableOpacity>
                     ),
                 }}   
                />
            <StackDetails.Screen 
                name="DetailsScreen" 
                component={DetailsScreen} 
                 options={{
                    title:'',
                    headerShown: false
                 }}
            />
        </StackDetails.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    txtEdit:{
        color: colores.blue,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '400'
    }
});
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {colores} from '../theme/colores';
import {Onboarding1Screen} from '../screens/Onboarding1Screen';
import {Onboarding2Screen} from '../screens/Onboarding2Screen';
import {Onboarding3Screen} from '../screens/Onboarding3Screen';
import { LoginScreen } from '../screens/LoginScreen';
import { TabsNavigation } from './TabsNavigation';
import { SavedOffertsScrren } from '../screens/SavedOffertsScrren';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: colores.white
                }
            }}
        >
            <Stack.Screen name='Onboarding1Screen' component={Onboarding1Screen} />
            <Stack.Screen name='Onboarding2Screen' component={Onboarding2Screen} />
            <Stack.Screen name='Onboarding3Screen' component={Onboarding3Screen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='TabsNavigation' component={TabsNavigation} />
            <Stack.Screen name='SavedOffertsScrren' component={SavedOffertsScrren} />
        </Stack.Navigator>
    )
}




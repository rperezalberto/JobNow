import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DiscoverScreen} from '../screens/DiscoverScreen';
import { SavedOffertsScrren } from '../screens/SavedOffertsScrren';
import { MyAccountScreen } from '../screens/MyAccountScreen';
import {colores} from '../theme/colores';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderLeftComponent } from '../components/headerHome/HeaderLeftComponent'
import { HeaderRighttComponent } from '../components/headerHome/HeaderRighttComponent';
import { StackNavigationDetails } from './StackNavigationDetails';


const Tabs = createBottomTabNavigator();


export const TabsNavigation = () => {
    return(
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle:{
                    height: 60,
                    position: 'absolute',
                    backgroundColor: colores.greyClaro,
                    borderRadius: 10,
                    margin: 10,
                    elevation: 0
                },
                headerStyle:{
                    backgroundColor: colores.white,
                    elevation: 0
                },
                headerLeft: () =><HeaderLeftComponent />,
                headerRight: () =><HeaderRighttComponent/>,
                tabBarActiveTintColor: colores.blue,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colores.blue,
                
            }}
        >
            <Tabs.Screen 
                name='DiscoverScreen' 
                component={DiscoverScreen}
                options={{
                    title:'',
                    tabBarIcon:(focus) => (
                        <Icon name='briefcase' size={focus.size} color={focus.color} />
                    )
                }}
            />
            
            
            
            <Tabs.Screen 
                name='StackNavigationDetails' 
                component={StackNavigationDetails} 
                options={{
                    title:'',
                    headerShown: false,
                    tabBarIcon: (focus) => (
                        <Icon name='bookmark' size={focus.size} color={focus.color} />
                    )
                }}
            />


            <Tabs.Screen 
                name='MyAccountScreen' 
                component={MyAccountScreen} 
                options={{
                    title:'',
                    headerShown: false,
                    tabBarIcon:(focus) =>(
                        <Icon name='user' size={focus.size} color={focus.color} />
                    )
                }}
            />

            {/* <Tabs.Screen name='' component={}/> */}
        </Tabs.Navigator>
    )
}
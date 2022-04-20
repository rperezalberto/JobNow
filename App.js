import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { MostrarLoginContext } from './src/contexts/MostrarLoginContext';

const App = () => {
  return (
    <NavigationContainer>
        <MostrarLoginContext>
            <StackNavigation />
        </MostrarLoginContext>
    </NavigationContainer>
  );
};

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/pages/Home';
import ButtonModule from './components/pages/ButtonModule';
import SimpleWiresModule from './components/pages/SimpleWiresModule';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ButtonModule" component={ButtonModule} />
        <Stack.Screen name="SimpleWiresModule" component={SimpleWiresModule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
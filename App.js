import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './src/screens/TelaInicial.js';
import TelaCadastro from './src/screens/TelaCadastro.js';
import TelaLogin from './src/screens/TelaLogin.js';
import TelaAlgonai from './src/screens/TelaAlgonai.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Login" component={TelaLogin} />    
        <Stack.Screen name="Algonai" component={TelaAlgonai} />            
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
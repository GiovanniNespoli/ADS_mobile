import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/modules/home';
import { Login } from './src/modules/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            //editar tela
          }}
          name="Home"
          component={Home} />
        <Stack.Screen
          options={{
            //editar tela
          }}
          name="Login"
          component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
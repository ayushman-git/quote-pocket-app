import * as React from 'react';
import { NavigationContainer as Container } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Home } from '@/screens';

const Stack = createNativeStackNavigator();

function NavigationContainer() {
  return (
    <Container>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </Container>
  );
}

export default NavigationContainer;

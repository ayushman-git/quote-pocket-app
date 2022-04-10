import * as React from 'react';
import { NavigationContainer as Container } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// eslint-disable-next-line import/no-unresolved
import { Login } from '@/screens';

const Stack = createNativeStackNavigator();

function NavigationContainer() {
  return (
    <Container>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </Container>
  );
}

export default NavigationContainer;

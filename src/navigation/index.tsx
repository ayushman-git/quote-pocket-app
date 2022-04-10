import * as React from 'react';
import { NavigationContainer as Container } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Home } from '@/screens';
import { navigationRef } from './utils';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function NavigationContainer() {
  return (
    <Container ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Login} />
        <Drawer.Screen name="Notifications" component={Login} />
      </Drawer.Navigator> */}
    </Container>
  );
}

export default NavigationContainer;

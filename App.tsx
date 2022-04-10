import React from 'react';
import { SafeAreaView } from 'react-native';
import NavigationContainer from './src/navigation';
import 'react-native-gesture-handler';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer />
    </SafeAreaView>
  );
}

export default App;

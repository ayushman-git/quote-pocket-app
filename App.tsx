import React from 'react';
import { SafeAreaView } from 'react-native';
import NavigationContainer from './src/navigation';

function App() {
  console.log('TEST');
  return (
    <SafeAreaView>
      <NavigationContainer />
    </SafeAreaView>
  );
}

export default App;

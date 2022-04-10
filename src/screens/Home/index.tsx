import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingActionButton } from '@/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282828',
  },
});

function Home() {
  const addQuote = () => {
    console.log('ADD');
  };
  return (
    <View style={styles.container}>
      <Text>
        A children’s story that can only be enjoyed by children is not a good children’s story in
        the slightest
      </Text>
      <Text>C.S. Lewis</Text>
      <FloatingActionButton onPress={addQuote} />
    </View>
  );
}

export default Home;

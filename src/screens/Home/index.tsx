import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282828',
  },
});

function Home() {
  return (
    <View style={styles.container}>
      <Text>
        A children’s story that can only be enjoyed by children is not a good children’s story in
        the slightest
      </Text>
      <Text>C.S. Lewis</Text>
    </View>
  );
}

export default Home;

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BaseButton from '@/components/BaseButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282828',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  quote: {
    color: '#fff',
  },
});

function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/einstein.png')} />
      <Text style={styles.title}>Quote Pocket</Text>
      <Text style={styles.quote}>“Books were my pass to personal freedom”</Text>
      <BaseButton text="GET STARTED" />
    </View>
  );
}

export default Login;

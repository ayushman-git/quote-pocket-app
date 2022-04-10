import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BaseButton from '@/components/BaseButton';

const einstein = require('../../assets/images/einstein.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282828',
    paddingTop: '20%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
  },
  quote: {
    marginTop: 20,
    color: '#fff',
  },
  btnContainer: {
    position: 'absolute',
    bottom: '10%',
  },
});

function Login() {
  const login = () => {
    console.log('LOGIN');
  };
  return (
    <View style={styles.container}>
      <Image source={einstein} />
      <Text style={styles.title}>Quote Pocket</Text>
      <Text style={styles.quote}>“Books were my pass to personal freedom”</Text>
      <View style={styles.btnContainer}>
        <BaseButton text="GET STARTED" onPress={login} />
      </View>
    </View>
  );
}

export default Login;

//

import * as React from 'react';

import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  starLogo: {
    width: 200,
    height: 200,
  },
});
const helloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello World from Group nG06 : member Liene Rimsa</Text>
      <Text>This is my Liene Rimsa first React Native application!</Text>

      <Image style={styles.starLogo} source={require('./assets/images.png')} />
    </View>
  );
};
export default helloWorldApp;

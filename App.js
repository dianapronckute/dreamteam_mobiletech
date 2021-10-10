//

import * as React from 'react';

import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
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
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Text>Hello World from Group nG06 : member Diana Pronckute!</Text>
      <Text>This is my Diana Pronckute first React Native application!</Text>
    </View>
  );
};
export default helloWorldApp;

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

//export default function App()
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

      <Image>
        {''}
        source=
        {{
          uri:
            'https://thumbs.dreamstime.com/z/young-woman-using-laptop-video-call-zoom-communication-distance-via-video-video-call-zoom-young-attractive-women-using-181628717.jpg',
        }}
        //style={{ width: 400, height: 400, margin: 16 }}
        />
      </Image>
    </View>
  );
};
export default helloWorldApp;
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});*/

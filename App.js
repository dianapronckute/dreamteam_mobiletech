//

import * as React from 'react';

import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  budgetLogo: {
    width: 200,
    height: 200,
  },
});
const ExpensoLogo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
      }}>
      <Image style={styles.budgetLogo} source={require('./assets/budget.png')} />
      <Text>Manage your finance with budget planning app and become a millionare...</Text>
      <Text></Text>

      
    </View>
  );
};
export default ExpensoLogo;

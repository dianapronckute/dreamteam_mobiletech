import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  firstLogo: {
    width: 100,
    height: 100
  }
})
const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "dodgerblue"
      }}>
      <Text>Hello, world!</Text>
      <Text>Hello World from Group nG06</Text>
      <Text>Member: Kristaps Fedorovics</Text>
      <Image
        style={styles.firstLogo}
        source={require('/home/kristaps/DreamTeam/dreamteam_mobiletech/assets/space-dog-laika1.png')}>
      </Image>
    </View>
  )
}
export default HelloWorldApp;
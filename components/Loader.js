import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ActivityIndicator size="large" color="#f4ad42" />
        <Text> Loading ... </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

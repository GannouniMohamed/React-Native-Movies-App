import React, { Component } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'

export class Footer extends Component {
  render () {
    return (
      <View style={{
        flex: 1,
        height: 100,
        width: Dimensions.get('window').width,
        backgroundColor: '#111',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image 
          style={{ flex: 1, width: 120, height: 40, margin: 7, resizeMode: 'contain' }}
          source={{uri: 'https://forja.tn/logoHeader.png'}}
        />
        <Text
          style={{
            flex: 1,
            color: '#fff',
            textAlign: 'center',
            margin: 10
          }}
        > Forja.tn is a streaming platform that offers you the pleasure to watch your
         best movies and series for free, in high definition (HD)</Text>
      </View>
    )
  }
}

export default Footer

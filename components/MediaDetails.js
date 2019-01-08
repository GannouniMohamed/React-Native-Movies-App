import React, { Component } from 'react'
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native'
import VideoPlayer from '@expo/videoplayer'

import { LinearGradient, Icon, Video, Constants, ScreenOrientation } from 'expo'
export class MediaDetails extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.data.Poster }} style={styles.imageBackdrop} />
        <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
        <View style={styles.containerv}>
          <VideoPlayer
            videoProps={{ shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
              isMuted: false}}
            isPortrait
            playFromPositionMillis={0}
            switchToLandscape={() => ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)}
            switchToPortrait={() => ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)}
          />
        </View>
        <View style={styles.cardContainer}>
          <Image source={{ uri: this.props.data.Poster }} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {this.props.data.Title}
            </Text>
            <View style={styles.cardGenre}>
              <Text style={styles.cardGenreItem}>{this.props.data.Genre}</Text>
            </View>
            <View style={styles.cardGenre}>
              <Text style={styles.cardGenreItem}>{this.props.data.Year}</Text>
            </View>
            <View style={styles.cardNumbers}>
              <View style={styles.cardStar}>
                <Icon.Ionicons
                  name='md-star'
                  size={16}
                  color='#F5B642'
                />
                <Text style={styles.cardStarRatings}>{this.props.data.imdbRating}</Text>
              </View>
              <Text style={styles.cardRunningHours} />
            </View>
            <Text style={styles.cardDescription} numberOfLines={6}>
              {this.props.data.Plot}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default MediaDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Poster: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: 248
  },
  linearGradient: {
    top: 0,
    left: 0,
    right: 0,
    height: 248,
    position: 'absolute'
  },
  imageBackdrop: {
    flex: 1,
    backgroundColor: 'black',
    resizeMode: 'cover',
    alignSelf: 'stretch',
    height: 248
  },
  cardContainer: {
    position: 'absolute',
    top: 32,
    right: 16,
    left: 16,
    flexDirection: 'row'
  },
  cardImage: {
    height: 184,
    width: 135,
    borderRadius: 3
  },
  cardDetails: {
    paddingLeft: 10,
    flex: 1
  },
  cardTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500',
    paddingTop: 10
  },
  cardGenre: {
    flexDirection: 'row'
  },
  cardGenreItem: {
    fontSize: 11,
    marginRight: 5,
    color: 'white'
  },
  cardDescription: {
    color: '#f7f7f7',
    fontSize: 13,
    marginTop: 5
  },
  cardNumbers: {
    flexDirection: 'row',
    marginTop: 5
  },
  cardStar: {
    flexDirection: 'row'
  },
  cardStarRatings: {
    marginLeft: 5,
    fontSize: 16,
    color: 'white'
  },
  cardRunningHours: {
    marginLeft: 5,
    fontSize: 12
  },
  viewButton: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#EA0000',
    width: 100,
    height: 30,
    marginTop: 10
  },
  viewButtonText: {
    color: 'white'
  },
  Video: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 300
  },
  containerV: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  }
})

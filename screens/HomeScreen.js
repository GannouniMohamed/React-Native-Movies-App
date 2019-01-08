import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Icon } from 'expo'

import MainCarousel from '../components/Carousel'
import HorizontalList from '../components/HorizontalList'
import Footer from '../components/Footer'

import GET_LATEST_MOVIES from '../components/gql/query/latestMovies'
import GET_LATEST_SERIES from '../components/gql/query/latestSeries'
import MOST_WATCHED_MOVIES from '../components/gql/query/mostWatchedMovies'
import MOST_WATCHED_SERIES from '../components/gql/query/mostWatchedSeries'

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon.Ionicons
        name='md-home'
        size={26}
        style={{flex: 1, tintColor}}
      />
    ),
  };
  render () {
    return (
      <ScrollView style={styles.Container}>
        <MainCarousel />
        <HorizontalList
          title={'NEW EPISODES'}
          query={GET_LATEST_SERIES}
          name={'latestSeries'}
          HLTitleStyle={{color: '#1a1917'}}
          HLStyle={{backgroundColor: '#fff'}}
        />
        <HorizontalList
          title={'NEW MOVIES'}
          query={GET_LATEST_MOVIES}
          name={'latestMovies'}
          HLTitleStyle={{color: '#fff'}}
          HLStyle={{backgroundColor: '#888'}}
        />
        <HorizontalList
          title={'MOST WATCHED MOVIES'}
          query={MOST_WATCHED_MOVIES}
          name={'mostWatchedMovies'}
          HLTitleStyle={{color: '#fff'}}
          HLStyle={{backgroundColor: '#444'}}
        />
        <HorizontalList
          title={'MOST WATCHED SERIES'}
          query={MOST_WATCHED_SERIES}
          name={'mostWatchedSeries'}
          HLTitleStyle={{color: '#fff'}}
          HLStyle={{backgroundColor: '#222'}}
        />
        <Footer />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
})

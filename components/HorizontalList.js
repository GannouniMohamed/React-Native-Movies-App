import React from 'react'
import { View, StyleSheet, FlatList, Text, Image } from 'react-native'
import { LinearGradient, Icon } from 'expo'

import { Query } from 'react-apollo'
import Loader from '../components/Loader'

export default class HorizontalList extends React.Component {
  renderItem ({ item, index }) {
    return (
      <View
        style={{
          flex: 1,
          margin: 5,
          minWidth: 140,
          maxWidth: 170,
          height: 220,
          maxHeight: 304,
          backgroundColor: '#CCC'
        }}
      >
        <Image
          style={{
            flex: 1,
            margin: 5,
            minWidth: 140,
            maxWidth: 165,
            height: 220,
            maxHeight: 304
          }}
          source={{ uri: item.Poster }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.1)']}
          style={styles.RateNYear}
        >
          <Icon.Ionicons
            name='md-star'
            size={12}
            color='#F5B642'
            style={{ margin: 6 }}
          >
            <Text numberOfLines={2} style={styles.MediaTitle}>{item.imdbRating}</Text>
          </Icon.Ionicons>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
          style={styles.linearGradient}
        >
          <Text numberOfLines={2} style={styles.MediaTitle}>{item.Title}</Text>
          <Text numberOfLines={1} style={styles.MediaTitle}>{item.Genre}</Text>
        </LinearGradient>
      </View>
    )
  }

  render () {
    return (
      <Query query={this.props.query}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <Text>Error! {error.message}</Text>

          return (
            <View style={[styles.container, this.props.HLStyle]}>
              <Text style={[styles.title, this.props.HLTitleStyle]}>{this.props.title}</Text>
              <FlatList
                style={{ flex: 0.2, height: 280 }}
                data={data[this.props.name]}
                renderItem={this.renderItem}
                horizontal
                ItemSeparatorComponent={() => <View style={{margin: 2}} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
              />
            </View>
          )
        }}
      </Query>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    color: '#1a1917',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    margin: 15
  },
  linearGradient: {
    flex: 1,
    margin: 5,
    minWidth: 140,
    maxWidth: 160,
    height: 60,
    maxHeight: 304,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center'
  },
  MediaTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    margin: 5
  },
  RateNYear: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: 0,
    right: 0
  }
})

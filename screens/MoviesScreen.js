import React, { Component } from 'react'
import { StyleSheet, FlatList, Image, TouchableOpacity, Text } from 'react-native'
import { Query } from 'react-apollo'
import { LinearGradient, Icon } from 'expo'

import GET_MOVIES from '../components/gql/query/movies'
import Loader from '../components/Loader'

export default class MoviesScreen extends Component {
  constructor (props) {
    super(props)
    this.goToDetails = this.goToDetails.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  goToDetails (item) {
    const { navigate } = this.props.navigation
    navigate('Details', { ...item })
  }

  renderItem ({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => this.goToDetails(item)}
        style={{
          flex: 1,
          margin: 5,
          minWidth: 170,
          maxWidth: 223,
          height: 290,
          maxHeight: 304,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#CCC'
        }}
      >
        <Image
          style={{
            flex: 1,
            margin: 5,
            minWidth: 160,
            maxWidth: 200,
            height: 270,
            maxHeight: 300,
            backgroundColor: '#CCC'
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
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <Query query={GET_MOVIES}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <Text>Error! {error.message}</Text>

          return (
            <FlatList
              contentContainerStyle={styles.list}
              data={data.movies}
              renderItem={this.renderItem}
              numColumns={4}
              keyExtractor={item => item._id}
            />

          )
        }}
      </Query>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  linearGradient: {
    flex: 1,
    margin: 5,
    height: 80,
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
    fontSize: 14,
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

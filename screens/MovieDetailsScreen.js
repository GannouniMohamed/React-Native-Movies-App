import React from 'react'
import { StatusBar, StyleSheet, View, Text } from 'react-native'
import { Query } from 'react-apollo'

import Footer from '../components/Footer'
import Loader from '../components/Loader'
import MediaDetails from '../components/MediaDetails'

import GET_MOVIEBYID from '../components/gql/query/movieById'

export default class MovieDetailsScreen extends React.Component {
  render () {
    const { navigation: { state: { params: { _id } } } } = this.props

    return (
      <Query
        query={GET_MOVIEBYID}
        variables={{ id: _id }}
      >
        {({ loading, error, data }) => {
          console.log(data)
          if (loading) return <Loader />
          if (error) return <Text>Error! {error.message}</Text>
          return (
            <View style={styles.container}>
              <StatusBar barStyle='default' />
              <MediaDetails data={data.movieById} />
              <View style={{flex: 0.4}}>
                <Footer />
              </View>
            </View>)
        }}
      </Query>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

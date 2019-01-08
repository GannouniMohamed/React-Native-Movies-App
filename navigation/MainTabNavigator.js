import React from 'react'
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'
import { Icon } from 'expo'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'

import SeriesScreen from '../screens/SeriesScreen'
import MoviesScreen from '../screens/MoviesScreen'

import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import SerieDetailsScreen from '../screens/SerieDetailsScreen'

import CustomDrawerContentComponent from '../components/DrawerComponent'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <Icon.Ionicons
          onPress={async () => {
            navigation.openDrawer()
          }}
          name='md-menu'
          size={26}
          style={{ margin: 15 }}
        />
      )
    })
  }
})

const MoviesStack = createStackNavigator({
  Movies: {
    screen: MoviesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Movies',
      headerLeft: (
        <Icon.Ionicons
          onPress={() => {
            navigation.openDrawer()
          }}
          name='md-menu'
          size={26}
          style={{ margin: 15 }}

        />
      )
    })
  },
  Details: {
    screen: MovieDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.Title
    })
  }
},
{
  mode: 'modal'
  // headerMode: 'none',
})

const SeriesStack = createStackNavigator({
  Series: {
    screen: SeriesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Series',
      headerLeft: (
        <Icon.Ionicons
          onPress={() => {
            navigation.openDrawer()
          }}
          name='md-menu'
          size={26}
          style={{ margin: 15 }}

        />
      )
    })
  },
  Details: {
    screen: SerieDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.Title
    })
  }
},
{
  mode: 'modal'
  // headerMode: 'none',
})

const AppStack = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name='ios-home'
          size={30}
          style={{flex: 1.2, color: tintColor, marginTop: 7, width: 30}}
        />
      )
    })
  },
  Movies: {
    screen: MoviesStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Movies',
      drawerIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name='ios-film'
          size={30}
          style={{flex: 1.2, color: tintColor, marginTop: 7, width: 30}}
        />
      )
    })
  },
  Series: {
    screen: SeriesStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Series',
      drawerIcon: ({ tintColor }) => (
        <Icon.Ionicons
          name='ios-tv'
          size={30}
          style={{flex: 1.2, color: tintColor, marginTop: 7, width: 30}}
        />
      )
    })
  }
}, {
  contentComponent: CustomDrawerContentComponent,
  drawerWidth: Dimensions.get('screen').width * 0.8,
  contentOptions: {
    activeTintColor: 'orange'
  }
})

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      header: null
    })
  }
})

const MainAppRoot = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)
export default MainAppRoot

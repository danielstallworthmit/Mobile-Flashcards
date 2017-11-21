import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import DeckList from './src/components/DeckList'
import Router from './Router'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Constants.statusBarHeight
  }
})
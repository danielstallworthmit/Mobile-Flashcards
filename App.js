import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './src/reducers'
import { StyleSheet, Text, View, AppState, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import ReduxThunk from 'redux-thunk'
import DeckList from './src/components/DeckList'
import Router from './Router'

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk))

export default class App extends React.Component {
  state = {
    storeLoading: false,
    store: store
  }
  componentWillMount() {
    // Adapted from https://medium.com/@sumitkushwaha/syncing-redux-store-with-asyncstorage-in-react-native-2b8b890b9ca1 
    let self = this
    AppState.addEventListener('change', this.handleAppStateChange.bind(this))
    this.setState({ storeLoading: true })
    AsyncStorage.getItem('store').then((val) => {
      if (val && val.length) {
        const initialStore = JSON.parse(val)
        self.setState({ store: createStore(reducer, initialStore, applyMiddleware(ReduxThunk)) })
      } else {
        self.setState({ store: store })
      }
      this.setState({ storeLoading: false })
    }).catch((err) => {
      self.setState({ store: store })
      this.setState({ storeLoading: false })
    })
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this))
  }
  handleAppStateChange(appState) {
    const storeValue = JSON.stringify(this.state.store.getState())
    AsyncStorage.setItem('store', storeValue)
  }
  render() {
    if (this.state.storeLoading) {
      return (<Text>Loading</Text>)
    } else {
      return (
        <Provider store={this.state.store}>
          <View style={styles.container}>
            <Router />
          </View>
        </Provider>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Constants.statusBarHeight
  }
})
import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import DeckList from './src/components/DeckList'
// import DeckView from './components/DeckView'
// import QuizViewQuestion from './components/QuizViewQuestion'
// import QuizViewAnswer from './components/QuizViewAnswer'
// import NewDeck from './components/NewDeck'
// import NewQuestion from './components/NewQuestion'

// const DeckNavigator = StackNavigator({
//   StatusBarMod: { screen: StatusBarMod },
//   DeckList: { screen: DeckList },
//   DeckView: { screen: DeckView },
//   QuizViewQuestion: { screen: QuizViewQuestion },
//   QuizViewAnswer: { screen: QuizViewAnswer },
//   NewDeck: { screen: NewDeck },
//   NewQuestion: { screen: NewQuestion }
// })

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.statusBarHeight
  }
});
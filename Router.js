import React from 'react'
import { Text } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import DeckList from './src/components/DeckList'
import DeckView from './src/components/DeckView'
import NewDeck from './src/components/NewDeck'
import BackButton from './src/components/BackButton'
import NewCard from './src/components/NewCard'
import QuizViewAnswer from './src/components/QuizViewAnswer'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="deck">
                <Scene key="DeckList" component={DeckList} title="Mobile Flashcards" initial
                        onRight={() => Actions.NewDeck()} rightTitle="Add" renderBackButton={() => <Text></Text>} />
                <Scene key="DeckView" component={DeckView} title="Deck" renderBackButton={BackButton} />
                <Scene key="NewDeck" component={NewDeck} title="New Deck" />
                <Scene key="NewCard" component={NewCard} title="New Card" />
                <Scene key="QuizViewAnswer" component={QuizViewAnswer} title="Quiz Answer" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;
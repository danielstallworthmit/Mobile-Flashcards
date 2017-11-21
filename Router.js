import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import DeckList from './src/components/DeckList'
import DeckView from './src/components/DeckView'
import NewDeck from './src/components/NewDeck'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="deck">
                <Scene key="DeckList" component={DeckList} title="Mobile Flashcards" initial
                        onRight={() => Actions.NewDeck()} rightTitle="Add" />
                <Scene key="DeckView" component={DeckView} title="Deck" />
                <Scene key="NewDeck" component={NewDeck} title="New Deck" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;
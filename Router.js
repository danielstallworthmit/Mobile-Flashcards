import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import DeckList from './src/components/DeckList'
import DeckView from './src/components/DeckView'
import NewDeck from './src/components/NewDeck'
import QuizViewQuestion from './src/components/QuizViewQuestion'
import QuizViewAnswer from './src/components/QuizViewAnswer'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="deck">
                <Scene key="DeckList" component={DeckList} title="Mobile Flashcards" initial
                        onRight={() => Actions.NewDeck()} rightTitle="Add" />
                <Scene key="DeckView" component={DeckView} title="Deck" />
                <Scene key="NewDeck" component={NewDeck} title="New Deck" />
                <Scene key="QuizViewQuestion" component={QuizViewQuestion} title="Quiz" />
                <Scene key="QuizViewAnswer" component={QuizViewAnswer} title="Quiz Answer" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;
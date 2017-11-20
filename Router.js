import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DeckList from './src/components/DeckList';
import DeckView from './src/components/DeckView';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="deck">
                <Scene key="DeckList" component={DeckList} title="Mobile Flashcards" initial />
                <Scene key="DeckView" component={DeckView} title="Deck" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;
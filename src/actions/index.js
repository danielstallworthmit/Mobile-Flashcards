import { Actions } from 'react-native-router-flux'

export const DECK_CREATE = 'DECK_CREATE'

export const deckCreate = (deck) => {
    return {
        type: DECK_CREATE,
        payload: deck
    }
}
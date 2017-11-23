// import START_QUIZ from '../actions'
import { getDeckInfo } from '../../utils/helpers'
import { QUIZ_VIEW, GET_DECKS, ADD_DECK, ADD_CARD } from '../actions'
const INITIAL_STATE = getDeckInfo()

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case QUIZ_VIEW:
            return { ...state, ...action.payload }
        case GET_DECKS:
            return { ...state, allDecks: action.payload  }
        case ADD_DECK:
            return { ...state, 
                    headline: action.payload, 
                    q: null, 
                    questions: [],
                    subline: '0 Cards',
                    topButton: 'Add Card',
                    bottomButton: 'Start Quiz',
                    allDecks: [ ...state.allDecks, { title: action.payload, questions: [] } ] }
        case ADD_CARD:
            // return { ...state, allDecks: [ ...state.allDecks.slice(0, action.payload.idx), { ...state.allDecks[action.payload.idx], questions: [ ...state.allDecks[action.payload.idx].questions, { question: action.payload.question, answer: action.payload.answer }   ] }, ...state.allDecks.slice(action.payload.idx) ] }
            return { ...state, allDecks: state.allDecks.map((deck, i) => {
                if (deck.title === action.payload.headline) {
                    return { ...deck, questions: [ ...deck.questions, { question: action.payload.question, answer: action.payload.answer } ] }
                }
                return deck
            }) }
        default:
            return state
    }
}
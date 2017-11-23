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
            // Update elements to show correct info on navigation when create new deck
            return { ...state, 
                    headline: action.payload, 
                    q: null, 
                    questions: [],
                    subline: '0 Cards',
                    topButton: 'Add Card',
                    bottomButton: 'Start Quiz',
                    allDecks: [ ...state.allDecks, { title: action.payload, questions: [] } ] 
            }
        case ADD_CARD:
            // Update elements to show correct info on navigation when create new card in a deck
            return { ...state, 
                questions: [ ...state.questions, { question: action.payload.question, answer: action.payload.answer } ],
                subline: `${state.questions.length+1} Cards`,
                allDecks: state.allDecks.map((deck, i) => {
                    // Update matching deck in the allDecks list with the new card
                    if (deck.title === action.payload.headline) {
                        return { ...deck, 
                            questions: [ 
                                ...deck.questions, 
                                { question: action.payload.question, answer: action.payload.answer } 
                            ] 
                        }
                    }
                    return deck
                })
            }
        default:
            return state
    }
}
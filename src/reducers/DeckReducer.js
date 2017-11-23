// import START_QUIZ from '../actions'
import { getDeckInfo } from '../../utils/helpers'
import { QUIZ_VIEW, GET_DECKS } from '../actions'
const INITIAL_STATE = getDeckInfo()

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case QUIZ_VIEW:
            return { ...state, ...action.payload }
        case GET_DECKS:
            return { ...state, ['allDecks']: INITIAL_STATE }
        default:
            return state
    }
}
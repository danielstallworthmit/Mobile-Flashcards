// import START_QUIZ from '../actions'
import { getDeckInfo } from '../../utils/helpers'
const INITIAL_STATE = getDeckInfo()

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        // case START_QUIZ:
        //     Actions.DeckView()
        //     return action.payload
        default:
            return state
    }
}
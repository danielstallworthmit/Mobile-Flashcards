import { Actions } from 'react-native-router-flux'

export const GET_DECKS = 'GET_DECKS'
export const DECK_CREATE = 'DECK_CREATE'
export const QUIZ_VIEW = 'QUIZ_VIEW'

export const deckCreate = (deck) => {
    return {
        type: DECK_CREATE,
        payload: deck
    }
}

export const quizView = ({ title, questions, q, navType='question', ans=null, ques=null }) => {
    console.log(ans)
    console.log(questions)
    if (navType === 'DeckStart') {
        navType = 'question'
        q = 0
        headline= questions[q].question
        subline= 'Answer'
        topButton= 'Correct'
        bottomButton= 'Incorrect'
        console.log('DeckStart triggered!')
    }
    else if (ans !== null) {
        ans=null
        ques=1
        headline= questions[q].answer
        subline= 'Question'
        console.log('ans triggered!')
    }
    else if (ques !== null) {
        ques=null
        headline= questions[q].question
        subline= 'Answer'
        console.log('ques should have triggered!')
    }
    else {
        q += 1
        headline= questions[q].question
        subline= 'Answer'
        console.log('Default triggered!')
    }

    return (dispatch) => {
        dispatch({ type: QUIZ_VIEW, payload: { navType, title, questions, headline, subline, topButton, bottomButton, q, ans, ques } })
        Actions.DeckView()
        console.log('Should have navigated!!')
    }
}
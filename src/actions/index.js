import { Actions } from 'react-native-router-flux'

export const GET_DECKS = 'GET_DECKS'
export const DECK_CREATE = 'DECK_CREATE'
export const QUIZ_VIEW = 'QUIZ_VIEW'

export const getDecks = () => {
    return {
        type: GET_DECKS
    }
}

export const deckCreate = (deck) => {
    return {
        type: DECK_CREATE,
        payload: deck
    }
}

export const quizView = ({ title, questions, q=null, navType='question', ans=null, ques=null }) => {
    console.log(navType)
    if (navType === 'DeckStart') {
        navType = 'QuizStart'
        headline= title
        subline= `${questions.length} Cards`
        topButton= 'Add Card'
        bottomButton= 'Start Quiz'
        console.log('DeckStart triggered!')
    }
    else if (navType === 'QuizStart') {
        navType = 'question'
        q = 0
        headline= questions[q].question
        subline= 'Answer'
        topButton= 'Correct'
        bottomButton= 'Incorrect'
        console.log('QuizStart triggered!')
    }
    else if (ans !== null) {
        ans=null
        ques=1
        headline= questions[q].answer
        subline= 'Question'
    }
    else if (ques !== null) {
        ques=null
        headline= questions[q].question
        subline= 'Answer'
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
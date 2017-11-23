import { Actions } from 'react-native-router-flux'

export const GET_DECKS = 'GET_DECKS'
export const QUIZ_VIEW = 'QUIZ_VIEW'
export const ADD_DECK = 'ADD_DECK'

export const getDecks = (decks) => {
    return {
        type: GET_DECKS,
        payload: decks
    }
}

export const addDeck = ({title}) => {
    return (dispatch) => {
        console.log('Add deck called')
        dispatch({ type: ADD_DECK, payload: title })
        Actions.DeckView({ title, 
                navType: 'DeckStart', 
                questions: [], 
                headline: title, 
                subline: '0 Cards',
                topButton: 'Add Card',
                bottomButton: 'Start Quiz'
            })
    }
}

export const quizView = ({ title, questions, q=null, navType='question', ans=null, ques=null, score=null }) => {
    console.log(navType)
    if (navType === 'DeckStart') {
        navType = 'QuizStart'
        headline = title
        subline = `${questions.length} Cards`
        topButton = 'Add Card'
        bottomButton = 'Start Quiz'
        console.log('DeckStart triggered!')
    }
    else if (navType === 'QuizStart') {
        navType = 'question'
        q = 0
        score = 0
        try { 
            headline = questions[q].question 
            subline = 'Answer'
            topButton = 'Correct'
            bottomButton = 'Incorrect'
        } catch (e) { 
            navType = 'Done'
            headline = 'No Questions'
            subline = ''
            topButton = 'Add Card'
            bottomButton = 'Back to Deck'
        }
        console.log('QuizStart triggered!')
    }
    else if (ans !== null) {
        ans = null
        ques = 1
        headline = questions[q].answer
        subline = 'Question'
    }
    else if (ques !== null) {
        ques = null
        headline = questions[q].question
        subline = 'Answer'
    }
    else {
        q += 1
        if (q >= questions.length) {
            navType = 'Done'
            headline = `Score: ${score}`
            subline = ''
            topButton = 'Restart Quiz'
            bottomButton = 'Back to Deck'
        } else {
            headline = questions[q].question
            subline = 'Answer'
            console.log('Default triggered!')
        }
    }

    return (dispatch) => {
        dispatch({ type: QUIZ_VIEW, payload: { navType, title, questions, headline, subline, topButton, bottomButton, q, ans, ques, score } })
        Actions.DeckView()
        console.log('Should have navigated!!')
    }
}
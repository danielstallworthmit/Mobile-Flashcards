import { Actions } from 'react-native-router-flux'
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers'

export const GET_DECKS = 'GET_DECKS'
export const QUIZ_VIEW = 'QUIZ_VIEW'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

// Load all decks
export const getDecks = (decks) => {
    return {
        type: GET_DECKS,
        payload: decks
    }
}

// Add a deck
export const addDeck = ({title}) => {
    return (dispatch) => {
        console.log('Add deck called')
        dispatch({ type: ADD_DECK, payload: title })
        Actions.DeckView()
    }
}

// Add a card to a deck
export const addCard = ({ headline, question, answer }) => {
    return (dispatch) => {
        dispatch({ type: ADD_CARD, payload: { headline, question, answer } })
        Actions.DeckView()
    }
}

// Quiz logic to go through a quiz for a deck
export const quizView = ({ title, questions, q=null, navType='question', ans=null, ques=null, score=null }) => {
    if (navType === 'DeckStart') {
        // DeckStart page, Should ask if they want to start the quiz
        navType = 'QuizStart'
        headline = title
        subline = `${questions.length} Cards`
        topButton = 'Add Card'
        bottomButton = 'Start Quiz'
    }
    else if (navType === 'QuizStart') {
        // They start the quiz, if there are no questions handle messages accordingly
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
    }
    else if (ans !== null) {
        // User has clicked on the answer field and the answer is shown
        ans = null
        ques = 1
        headline = questions[q].answer
        subline = 'Question'
    }
    else if (ques !== null) {
        // User clicks on the Question field to go from Answer back to Question (do not go to next question)
        ques = null
        headline = questions[q].question
        subline = 'Answer'
    }
    else {
        q += 1
        if (q >= questions.length) {
            // Finished with the quiz! Score is shown and asked to restart or go back
            navType = 'Done'
            headline = `Score: ${score}`
            subline = ''
            topButton = 'Restart Quiz'
            bottomButton = 'Back to Deck'
            // Once quiz is completed for the data notification reset
            clearLocalNotification()
                .then(setLocalNotification)
        } else {
            // Otherwise user is still going through the quiz
            headline = questions[q].question
            subline = 'Answer'
        }
    }

    return (dispatch) => {
        // Update redux store and navigate to the quiz page
        dispatch({ type: QUIZ_VIEW, payload: { navType, title, questions, headline, subline, topButton, bottomButton, q, ans, ques, score } })
        Actions.DeckView()
    }
}
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { quizView } from '../actions'
import Button from './Button'

class DeckView extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.headline !== this.props.headline
    }
    sublineFunc() {
        const { title, questions, q, subline, score } = this.props
        if (this.props.navType === 'question') {
            if (subline === 'Question') {
                return (
                    <TouchableOpacity style={styles.textView} onPress={() => this.props.quizView({ ques: 1, title, questions, q, score })}>
                        <Text style={{fontSize: 20, color: 'blue'}}>{this.props.subline}</Text>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity style={styles.textView} onPress={() => this.props.quizView({ ans: 1, title, questions, q, score })}>
                        <Text style={{fontSize: 20, color: 'blue'}}>{this.props.subline}</Text>
                    </TouchableOpacity>
                )
            }
        }
        return (
            <View style={styles.textView}>
               <Text style={{fontSize: 20}}>{this.props.subline}</Text>
            </View>
        )
    }
    topButtonFunc(){
        const { title, questions, q, topButton, quizView, score } = this.props
        if (topButton === 'Add Card') {
            Actions.NewCard()
        } 
        else if (topButton === 'Restart Quiz') {
            quizView({ navType: 'QuizStart', title, questions })
        } else {
            quizView({ title, questions, q, score: score + 1 })
        }
    }
    bottomButtonFunc(){
        const { title, questions, q, navType, quizView, score, bottomButton } = this.props
        if (bottomButton === 'Back to Deck') {
            quizView({ navType: 'DeckStart', title, questions })
        } else {
            quizView({ title, questions, q, navType, score })
        }
    }
    render() {
        const { navType, questions, headline, subline, topButton, bottomButton, q } = this.props
        console.log(this.props)
        return (
            <View style={styles.deckView}>
                { navType === 'question' && <Text>{`${q+1}/${questions.length}`}</Text> }
                <View style={styles.textView}>
                    <Text style={{fontSize: 25}}>{headline}</Text>
                </View>
                { this.sublineFunc() }
                <View style={styles.buttonView}>
                    <Button onPress={() => this.topButtonFunc()}>{topButton}</Button>
                    <Button onPress={() => this.bottomButtonFunc()}>{bottomButton}</Button>
                </View>
            </View>
        )
    }
}

const styles = {
    deckView: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 8
    },
    textView: {
        alignItems: 'center'
    },
    buttonView: {
        flex: 0.3,
        alignItems: 'stretch',
        minHeight: 30
    }
}

const mapStateToProps = ({ decks }) => {
    return decks
}

export default connect(mapStateToProps, { quizView })(DeckView)
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { quizView } from '../actions'
import Button from './Button'

class DeckView extends React.Component {
    sublineFunc() {
        const { title, questions, q, subline } = this.props
        console.log(this.props.ans)
        if (this.props.navType === 'question') {
            if (subline === 'Question') {
                return (
                    <TouchableOpacity onPress={() => this.props.quizView({ ques: 1, title, questions, q })}>
                        <Text style={{fontSize: 20}}>{this.props.subline}</Text>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity onPress={() => this.props.quizView({ ans: 1, title, questions, q })}>
                        <Text style={{fontSize: 20}}>{this.props.subline}</Text>
                    </TouchableOpacity>
                )
            }
            return <Text style={{fontSize: 20}}>{this.props.subline}</Text>
        }
        else if (this.props.ques) {

        }
    }
    topButtonFunc(){
        const { title, questions, q } = this.props
        if (this.props.navType === 'DeckStart') {
            return 1
        } else {
            this.props.quizView({ title, questions, q })
        }
    }
    bottomButtonFunc(){
        const { title, questions, q } = this.props
        this.props.quizView({ title, questions, q })
    }
    render() {
        console.log(this.props)
        const { navType, questions, headline, subline, topButton, bottomButton, q } = this.props
        return (
            <View style={styles.deckView}>
                { navType === 'question' && <Text>{`${q+1}/${questions.length}`}</Text> }
                <View style={styles.textView}>
                    <Text style={{fontSize: 35}}>{headline}</Text>
                    { this.sublineFunc() }
                </View>
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
    },
    textView: {
        alignItems: 'center'
    },
    buttonView: {
        flex: 0.3,
        alignItems: 'stretch'
    }
}

const mapStateToProps = (deck) => {
    console.log(deck.decks)
    return deck.decks
}

export default connect(mapStateToProps, { quizView })(DeckView)
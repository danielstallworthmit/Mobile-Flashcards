import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import Input from './Input'
import Button from './Button'

class NewCard extends React.Component {
    state = {
        newCard: '',
        newAnswer: ''
    }
    render() {
        return (
            <View style={styles.newCardForm}>
                <View>
                    <Text style={{fontSize: 35}}>{'Enter a Question and Answer:'}</Text>
                </View>
                <Input 
                    label = 'Card Question'
                    placeholder = 'Meaning of Life'
                    value = {this.state.newCard}
                    onChangeText = { newCard => this.setState({ newCard }) }
                />
                <Input 
                    label = 'Card Answer'
                    placeholder = '42'
                    value = {this.state.newAnswer}
                    onChangeText = { newAnswer => this.setState({ newAnswer }) }
                />
                <View style={styles.submitButton}>
                    <Button onPress={() => this.props.addCard({ 
                                        headline: this.props.headline, 
                                        question: this.state.newCard, 
                                        answer: this.state.newAnswer 
                                    }) } >
                        {'Create Card'}
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    newCardForm: {
        flex: 1,
        justifyContent: 'space-around',
        paddingLeft: 8,
        paddingRight: 8
    },
    submitButton: {
        height: 70
    }
}

const mapStateToProps = ({ decks }) => {
    // let idx = null
    // decks.allDecks.map((deck, i) => {
    //     if (deck.title === decks.headline) {
    //         idx = i
    //     }
    //     return deck
    // })
    // return { idx }
    return { headline: decks.headline }
}

export default connect(mapStateToProps, { addCard })(NewCard)
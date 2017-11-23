import React from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import Input from './Input'
import Button from './Button'

class NewDeck extends React.Component {
    state = {
        newDeck: ''
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.newDeckForm}>
                <View>
                    <Text style={{fontSize: 35}}>{'Enter the name for your new deck:'}</Text>
                </View>
                <Input 
                    label = 'Deck Name'
                    placeholder = 'React'
                    value = {this.state.newDeck}
                    onChangeText = { newDeck => this.setState({ newDeck }) }
                />
                <View style={styles.submitButton}>
                    <Button onPress={() => this.props.addDeck({ title: this.state.newDeck }) } >
                        {'Create Deck'}
                    </Button>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = {
    newDeckForm: {
        flex: 1,
        justifyContent: 'space-around',
        paddingLeft: 8,
        paddingRight: 8
    },
    submitButton: {
        height: 70
    }
}

export default connect(null, { addDeck })(NewDeck)
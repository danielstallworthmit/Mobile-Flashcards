import React from 'react'
import { Text, View } from 'react-native'
import Button from './Button'

export default function DeckView(props) { 
    return (
        <View style={styles.deckView}>
            <View style={styles.textView}>
                <Text style={{fontSize: 35}}>{props.title}</Text>
                <Text style={{fontSize: 20}}>{`${props.questions.length} Cards`}</Text>
            </View>
            <View style={styles.buttonView}>
                <Button>Add Card</Button>
                <Button>Start Quiz</Button>
            </View>
        </View>
    ) 
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

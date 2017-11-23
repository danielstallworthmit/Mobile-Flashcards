import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default function NewDeck() { 
    return (
        <TouchableOpacity onPress={() => Actions.DeckList()} >
            <Text style={{color: 'blue', paddingLeft: 4}}>Back</Text>
        </TouchableOpacity>
    ) 
}
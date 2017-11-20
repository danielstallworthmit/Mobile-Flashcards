import React from 'react'
import { Text, View, ListView, FlatList, TouchableOpacity } from 'react-native'
import { getDeckInfo } from '../../utils/helpers'
import { Actions } from 'react-native-router-flux'
import Card from './Card'

function DeckItem({title, questions}) {
    return (
        <TouchableOpacity onPress={Actions.DeckView}>
            <Card style={{flex:1}}>
                <Text style={{fontSize: 25}}>{title}</Text>
                <Text>{`${questions.length} cards`}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default class DeckList extends React.Component {
    renderItem = ({item}) => {
        return <DeckItem key={item.title} {...item} /> 
    }
    render() {
        return (
            <View>
                <FlatList data={getDeckInfo()} renderItem={this.renderItem} keyExtractor={(item) => item.title} />
            </View>
        )
    }
}

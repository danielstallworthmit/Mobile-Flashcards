import React from 'react'
import { Text, View, ListView, FlatList } from 'react-native'
import { getDeckInfo } from '../../utils/helpers'
import Card from './Card'

function DeckItem({title, questions}) {
    return (
        <Card style={{flex:1}}>
                <Text style={{fontSize: 25}}>{title}</Text>
                <Text>{`${questions.length} cards`}</Text>
        </Card>
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

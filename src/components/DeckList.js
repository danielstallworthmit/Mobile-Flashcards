import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView, FlatList, TouchableOpacity } from 'react-native'
import { getDeckInfo } from '../../utils/helpers'
import { quizView } from '../actions'
import { Actions } from 'react-native-router-flux'
import Card from './Card'

function DeckItem({title, questions, quizView}) {
    return (
        <TouchableOpacity onPress={() => quizView({
                navType: 'DeckStart',
                headline: title,
                title, questions,
                subline: `${questions.length} Cards`,
                topButton: 'Add Card',
                bottomButton: 'Start Quiz'
             })}>
            <Card style={{flex:1}}>
                <Text style={{fontSize: 25}}>{title}</Text>
                <Text>{`${questions.length} cards`}</Text>
            </Card>
        </TouchableOpacity>
    )
}

class DeckList extends React.Component {
    renderItem = ({item}) => {
        return <DeckItem {...item} quizView={this.props.quizView} /> 
    }
    render() {
        return (
            <View>
                <FlatList data={this.props.decks} renderItem={this.renderItem} keyExtractor={(item) => item.title} />
            </View>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return { decks }
}

export default connect(mapStateToProps, { quizView })(DeckList)
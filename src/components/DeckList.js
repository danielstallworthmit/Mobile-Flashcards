import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ListView, FlatList, TouchableOpacity } from 'react-native'
import { getDeckInfo } from '../../utils/helpers'
import { quizView, getDecks } from '../actions'
import { Actions } from 'react-native-router-flux'
import Card from './Card'

function DeckItem({title, questions, quizView}) {
    return (
        <TouchableOpacity onPress={() => quizView({
                navType: 'DeckStart',
                title, questions
             })}>
            <Card style={{flex:1}}>
                <Text style={{fontSize: 25}}>{title}</Text>
                <Text>{`${questions.length} cards`}</Text>
            </Card>
        </TouchableOpacity>
    )
}

class DeckList extends React.Component {
    componentDidMount() {
        console.log('get decks called')
        const decks = this.props.decks.allDecks ? this.props.decks.allDecks : getDeckInfo()
        // console.log(decks)
        this.props.getDecks(decks)
    }
    renderItem = ({item}) => {
        return <DeckItem {...item} quizView={this.props.quizView} /> 
    }
    render() {
        return (
            <View>
                <FlatList data={this.props.decks.allDecks} renderItem={this.renderItem} keyExtractor={(item) => item.title} />
            </View>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return { decks }
}

export default connect(mapStateToProps, { quizView, getDecks })(DeckList)
import React from 'react'
import { Text, View, ListView, FlatList } from 'react-native'
import { getDeckInfo } from '../../utils/helpers'

function DeckItem({title, questions}) {
    return (
        <View style={{flex:1}}>
            <Text>{title}</Text>
            <Text>{`${questions.length} cards`}</Text>
        </View>
    )
}

// export default DeckList = () => (<View><Text>DeckList</Text></View>)
export default class DeckList extends React.Component {
    // componentDidMount() {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1,r2) => r1 !== r2
    //     });
    //     this.dataSource = ds.cloneWithRows()
    // }
    renderItem = ({item}) => {
        // <Text>{item}</Text>
        return <DeckItem key={item.title} {...item} /> 
    }
    render() {
        return (
            <View>
                <Text>Hi</Text>
                <FlatList data={getDeckInfo()} renderItem={this.renderItem} keyExtractor={(item) => item.title} />
            </View>
        )
    }
}
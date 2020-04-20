import React, { Component } from 'react';
import {
    Dimensions,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux'

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';

export const { height, width } = Dimensions.get('window');
import * as scoreActions from '../actions/scoreAction';
import * as sortAction from '../actions/sortAction';

const mapStateToProps = (state) => {
    return {
        scores: state.scoreReducer.scores,
        filteredScores: state.scoreReducer.filteredScores,
        sortBy: state.sortReducer.sortBy,
        range: state.sortReducer.range
    }
}

const mapDispatchToProps = {
    ...scoreActions,
    ...sortAction
};

class ScoreboardListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styles.scoreBoardItemContainer}>
                    <Text style={{ flex: 1, textAlign: 'left', fontSize: 16 }}>{this.props.item.name}</Text>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 16 }}>{this.props.item.score}</Text>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', borderWidth: 1, borderColor: 'red' }} onPress={() => {
                        this.props.deleteScore(this.props.item.id)
                    }}>
                        <Text>DELETE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: 'black' }} />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreboardListItem);
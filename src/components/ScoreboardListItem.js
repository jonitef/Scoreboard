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
            <View style={{
                width: width,
                height: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <Text style={{ marginRight: 20 }}>{this.props.item.name}</Text>
                <Text style={{ marginRight: 20 }}>{this.props.item.score}</Text>
                <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={() => {
                    this.props.deleteScore(this.props.item.id)
                }}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreboardListItem);
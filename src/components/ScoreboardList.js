import React, { Component } from 'react';
import {
    FlatList,
    Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';

import ScoreboardListItem from '../components/ScoreboardListItem';

export const { height, width } = Dimensions.get('window');

export default class ScoreboardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <FlatList
                style={{ width: '90%' }}
                data={this.props.data}
                renderItem={({ item, index }) => <ScoreboardListItem item={item} index={index} />}
                keyExtractor={item => item.id}
            />
        );
    }
}

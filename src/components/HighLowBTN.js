import React, { Component } from 'react';
import {
    TouchableOpacity,
    Dimensions,
    View,
    Text
} from 'react-native';

import styles from './Style';

export const { height, width } = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HighLowBTN extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.sortByButton}>
                <Text style={{}}>{this.props.title}</Text>
                <MaterialIcons name='check' size={19} color={this.props.selected ? 'black' : 'white'} />
            </TouchableOpacity>
        );
    }
}
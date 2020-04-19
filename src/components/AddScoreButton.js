import React, { Component } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from './Style';

export const { height, width } = Dimensions.get('window');

export default class AddScoreButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.addScoreButton}
                onPress={() => {
                    this.props.openModal()
                }}>
                <Text>ADD SCORE</Text>
            </TouchableOpacity>
        )
    }
}
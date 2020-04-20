import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import styles from './Style';

export default class General extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onPress}
                disabled={this.props.disabled}
            >
                <Text style={{ ...this.props.style }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
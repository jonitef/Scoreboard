import React, { Component } from 'react';
import {
    TextInput,
    Dimensions,
    View,
} from 'react-native';

import styles from './Style';

export const { height, width } = Dimensions.get('window');

export default class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onChangeText = (input) => {
        this.setState({ value: input })
        this.props.onChangeText(input)
    }

    render() {
        return (
            <View style={{...styles.inputFieldContainer, ...this.props.style}}>
                <TextInput
                    style={styles.inputField}
                    placeholderTextColor={'white'}
                    onChangeText={input => {
                        this.onChangeText(input)
                    }}
                    value={String(this.state.value)}
                    placeholder={this.props.placeholder}
                />
            </View>
        );
    }
}
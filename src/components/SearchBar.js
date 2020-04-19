import React, { Component } from 'react';
import {
    TextInput,
    Dimensions,
    View,
    TouchableOpacity
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

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onChangeText = (searchString) => {
        this.setState({ value: searchString })
        this.props.filterScore(searchString)
    }

    clearSearch = () => {
        this.setState({ value: '' });
        this.props.filterScore('')
        this.refs.searchInput.blur();
    }

    clearSearchIcon = () => {
        if (this.state.value !== '') {
            return (
                <TouchableOpacity onPress={() => this.clearSearch()} style={styles.clearIcon}>
                    <Ionicons name='ios-close' size={25} color='#fff' />
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <Ionicons name='ios-search' size={19} color='white' style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholderTextColor={'white'}
                    onChangeText={searchString => {
                        this.onChangeText(searchString)
                    }}
                    value={this.state.value}
                    placeholder={'Search by name...'}
                    ref={'searchInput'}
                />
                {this.clearSearchIcon()}
            </View>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
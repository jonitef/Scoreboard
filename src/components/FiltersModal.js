import React, { Component } from 'react';
import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';
import { connect } from 'react-redux'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Style';

export const { height, width } = Dimensions.get('window');

import InputField from './InputField';
import HighLowBTN from './HighLowBTN';
import GeneralBTN from './GeneralBTN';

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

class FiltersModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: this.props.sortBy,
            visible: false,
            disableApply: false,
            min: this.props.range.min,
            max: this.props.range.max
        };
    }

    render() {

        return (
            <View style={{}}>
                <TouchableOpacity onPress={() => this.setState({ visible: true })} style={styles.sortButton}>
                    <MaterialIcons name='sort' size={25} color='black' style={{}} />
                    <Text>Sort</Text>
                </TouchableOpacity>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.visible}>
                    <View style={styles.container}>
                        <View style={styles.modalView}>
                            <Text>SORT SCORES</Text>
                            <View style={{ width: width * 0.8 }}>
                                <View style={styles.rangeContainer}>
                                    <InputField value={this.state.min} style={{ width: 100 }} placeholder={'min'} onChangeText={(input) => this.setState({ min: input })} type={'numeric'} />
                                    <Text>-</Text>
                                    <InputField value={this.state.max === null ? '' : this.state.max} style={{ width: 100 }} placeholder={'max'} onChangeText={(input) => this.setState({ max: input })} type={'numeric'} />
                                </View>
                            </View>
                            <View style={{}}>
                                <HighLowBTN title={'High to low'} onPress={() => this.setState({ order: 'desc' })} selected={this.state.order === 'desc' ? true : false} />
                                <HighLowBTN title={'Low to high'} onPress={() => this.setState({ order: 'asc' })} selected={this.state.order === 'asc' ? true : false} />
                            </View>
                            <View style={styles.buttonContainer}>
                                <GeneralBTN style={styles.textStyleCancel} title={'Cancel'} disabled={false} onPress={() => {
                                    this.setState({ order: this.props.sortBy, visible: false })
                                }} />
                                <GeneralBTN style={{ ...styles.textStyleAdd, opacity: !this.state.disableApply ? 1 : 0.6 }} title={'APPLY'} disabled={this.state.disableApply} onPress={() => {
                                    this.props.changeSortBy(this.state.order)
                                    this.props.changeRange({ min: this.state.min, max: this.state.max })
                                    this.setState({ visible: false })
                                }} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FiltersModal);
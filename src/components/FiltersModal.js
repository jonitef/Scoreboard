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
            highToLow: this.props.sortBy,
            visible: false
        };
    }

    render() {
        return (
            <View style={{

            }}>
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
                                    <InputField style={{ width: 100 }} placeholder={'min'} onChangeText={(input) => this.setState({ min: input })} />
                                    <Text>-</Text>
                                    <InputField style={{ width: 100 }} placeholder={'max'} onChangeText={(input) => this.setState({ max: input })} />
                                </View>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity
                                    style={{ width: width * 0.8 }}
                                    onPress={() => this.setState({ highToLow: 'desc' })}
                                >
                                    <View style={styles.sortByButton}>
                                        <Text style={{}}>High to low</Text>
                                        <MaterialIcons name='check' size={19} color={this.state.highToLow === 'desc' ? 'black' : 'white'} style={{}} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ width: width * 0.8 }}
                                    onPress={() => this.setState({ highToLow: 'asc' })}
                                >
                                    <View style={styles.sortByButton}>
                                        <Text style={{}}>Low to high</Text>
                                        <MaterialIcons name='check' size={19} color={this.state.highToLow === 'asc' ? 'black' : 'white'} style={{}} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        this.setState({ highToLow: this.props.sortBy, min: '', max: '', visible: false })
                                    }}
                                >
                                    <Text style={styles.textStyleCancel}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        this.props.changeSortBy(this.state.highToLow)
                                        this.props.changeRange({ min: this.state.min, max: this.state.max })
                                        this.setState({ min: '', max: '', visible: false })
                                    }}
                                >
                                    <Text style={styles.textStyleAdd}>APPLY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FiltersModal);
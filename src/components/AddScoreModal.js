import React, { Component, useState } from "react";
import {
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { connect } from 'react-redux'
import uuid from 'react-native-uuid';

import styles from './Style';
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

class AddScoreModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            score: '',
            validNameScore: false
        }
    }

    setName = (name) => {
        this.setState({ name: name }, () => this.validateInput())
    }
    setScore = (score) => {
        this.setState({ score: score }, () => this.validateInput())
    }
    validateInput = () => {
        if (this.state.name === '' || this.state.score === '' || isNaN(this.state.score)) {
            this.setState({ validNameScore: false })
        }
        else {
            this.setState({ validNameScore: true })
        }
    }
    addScore = () => {
        this.props.addScore({ id: uuid.v4(), name: this.state.name, score: Number(this.state.score) })
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    this.setState({ validNameScore: false, name: '', score: '' })
                }}
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>ADD NEW SCORE!</Text>
                        <InputField style={{marginTop: 20}} placeholder={'Name'} onChangeText={this.setName} />
                        <InputField style={{marginTop: 20}} placeholder={'Score'} onChangeText={this.setScore} />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setState({ validNameScore: false, name: '', score: '' })
                                    this.props.toggleVisibility()
                                }}
                            >
                                <Text style={styles.textStyleCancel}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                disabled={!this.state.validNameScore}
                                onPress={() => {
                                    this.addScore()
                                    this.setState({ validNameScore: false, name: '', score: '' })
                                    this.props.toggleVisibility()
                                }}
                            >
                                <Text style={{ ...styles.textStyleAdd, opacity: this.state.validNameScore ? 1 : 0.6 }}>ADD</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScoreModal);
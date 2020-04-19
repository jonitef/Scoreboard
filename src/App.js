import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
  Text,
} from 'react-native';

import { connect } from 'react-redux'
export const { height, width } = Dimensions.get('window');

import * as scoreActions from './actions/scoreAction';

const mapStateToProps = (state) => {
  return {
    scores: state.scoreReducer
  }
}

const mapDispatchToProps = {
  ...scoreActions,
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Scoreboard App</Text>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
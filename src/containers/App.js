import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
} from 'react-native';

import { connect } from 'react-redux'
export const { height, width } = Dimensions.get('window');

import * as scoreActions from '../actions/scoreAction';
import * as sortAction from '../actions/sortAction';

import styles from './Style';

import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FiltersModal';
import ScoreboardList from '../components/ScoreboardList';
import AddScoreButton from '../components/AddScoreButton';
import AddScoreModal from '../components/AddScoreModal';

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  sortedData = () => {
    if (this.props.sortBy === 'desc') {
      const descending = this.props.filteredScores.sort((a, b) => b.score - a.score)
      return descending.filter(score => score.score >= this.props.range.min && score.score <= this.props.range.max)
    }
    else if (this.props.sortBy === 'asc') {
      const ascending = this.props.filteredScores.sort((a, b) => a.score - b.score)
      return ascending.filter(score => score.score >= this.props.range.min && score.score <= this.props.range.max)
    }
  }

  render() {

    console.log('this.props: ',this.props)
    
    return (
      <SafeAreaView style={styles.appContainer}>
        <AddScoreModal toggleVisibility={this.toggleModal} visible={this.state.isModalVisible} />
        <SearchBar />
        <FilterBar />
        <ScoreboardList data={this.sortedData()} />
        <AddScoreButton openModal={this.toggleModal} />
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
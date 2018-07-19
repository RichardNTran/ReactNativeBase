import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from 'actions/homeActions';
import PropTypes from 'prop-types';
import HomeView from './HomeView';

class HomeContainer extends Component {
  render() {
    const {
      appData,
      fetchData,
      navigation,
    } = this.props;
    console.log(this.props);
    return (
      <HomeView
        appData={appData}
        fetchData={fetchData}
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { appData } = state;
  return { appData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

HomeContainer.propTypes = {
  appData: PropTypes.object,
  fetchData: PropTypes.func,
  navigation: PropTypes.object,
};

HomeContainer.defaultProps = {
  appData: {},
  fetchData: () => { },
  navigation: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

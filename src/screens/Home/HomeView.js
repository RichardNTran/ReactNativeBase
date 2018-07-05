import React, { Component } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { fetchData } from '../../actions/homeActions';

class Home extends Component {
  render() {
    const {
      container,
      text,
      button,
      buttonText,
      mainContent
    } = styles;
    const {
      appData,
    } = this.props;
    console.log(this.props);
    return (
      <View style={container}>
        <Text style={text}>Redux Examples</Text>
        <TouchableHighlight style={button} onPress={() => this.props.fetchData()}>
          <Text style={buttonText}>Load Data</Text>
        </TouchableHighlight>
        <View style={mainContent}>
          {
            appData.isFetching && <Text>Loading</Text>
          }
          {
            appData.data.length ? (
              appData.data.map((person, i) => {
                return (<View key={i} >
                  <Text>Name: {person.name}</Text>
                  <Text>Age: {person.age}</Text>
                </View>);
              })
            ) : null
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appData: state.appData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})
  ;

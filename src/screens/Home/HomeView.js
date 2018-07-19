import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from 'components';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
  },
  buttonText: {
    color: 'white',
  },
  mainContent: {
    margin: 10,
  },
});

class HomeView extends Component {
  renderLoading() {
    const { appData } = this.props;
    if (!appData.isFetching) return null;
    return (
      <Text>
        Loading
      </Text>
    );
  }

  render() {
    const {
      container,
      text,
      mainContent,
    } = styles;

    const {
      appData,
      fetchData,
      navigation,
    } = this.props;
    return (
      <Card style={container}>
        <Text style={text}>
          Redux Examples
        </Text>
        <CardSection>
          <Button onPress={() => fetchData()}>
            Load Data
          </Button>
          <Button onPress={() => navigation.push('Profile')}>
            To Profile
          </Button>
        </CardSection>
        <View style={mainContent}>
          {this.renderLoading()}
          {
            appData.data.length ? (
              appData.data.map((person, i) => {
                const key = i.toString();
                return (
                  <View key={key}>
                    <Text>
                      {`Name: ${person.name}`}
                    </Text>
                    <Text>
                      {`Age: ${person.age}`}
                    </Text>
                  </View>
                );
              })
            ) : null
          }
        </View>
      </Card>
    );
  }
}

HomeView.propTypes = {
  appData: PropTypes.object,
  fetchData: PropTypes.func,
  navigation: PropTypes.object,
};

HomeView.defaultProps = {
  appData: {},
  fetchData: () => { },
  navigation: {},
};

export default HomeView;

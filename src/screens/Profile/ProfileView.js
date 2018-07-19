import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

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

class ProfileView extends Component {
  render() {
    const {
      container,
    } = styles;
    return (
      <View style={container}>
        Profile
      </View>
    );
  }
}

export default ProfileView;

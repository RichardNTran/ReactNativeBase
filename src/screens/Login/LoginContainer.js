import React, { Component } from 'react';
import { View, Input } from 'react-native';
// import LoginView from './LoginView';

class LoginContainer extends Component {
  render() {
    return (
      <View>
        <Input
          label="Email"
          placeholder="email.google.com"
        />
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
        />
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { appData } = state;
//   return { appData };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(fetchData())
//   };
// };

export default LoginContainer;

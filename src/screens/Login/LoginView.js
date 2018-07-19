import React, { Component } from 'react';
import { View, Input, Text } from 'react-native';
import { Spinner, Button } from 'components';
import PropTypes from 'prop-types';

const styles = {
  errorContent: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

class LoginView extends Component {
  onLogin() {
    this.console.log('login');
  }

  renderActions() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <Spinner />
      );
    }
    return (
      <Button onPress={this.onLogin()}>
        Login
      </Button>
    );
  }

  renderError() {
    const { formErrors } = this.props;
    if (!formErrors) return null;
    return (
      <View>
        <Text style={styles.errorContent}>
          {formErrors}
        </Text>
      </View>
    );
  }

  render() {
    const { email, password } = this.props;
    return (
      <View>
        <Input
          label="Email"
          placeholder="email.google.com"
          value={email}
        />
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          value={password}
        />
        {this.renderError()}
        {this.renderActions()}
      </View>
    );
  }
}

LoginView.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  isLoading: PropTypes.bool,
  formErrors: PropTypes.object,
};

LoginView.defaultProps = {
  email: '',
  password: '',
  isLoading: false,
  formErrors: {},
};

export default LoginView;

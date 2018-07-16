import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

const CardSection = (props) => {
  const {
    children,
  } = props;
  return (
    <View style={[style.containerStyle, props.style]}>
      {children}
    </View>
  );
};

CardSection.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};

CardSection.defaultProps = {
  children: {},
  style: null,
};

export { CardSection };

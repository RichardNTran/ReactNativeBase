import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from './screens/Home/HomeView';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          initial
          key="Home"
          component={Home}
          title="Home"
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;

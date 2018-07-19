import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import HomeContainer from 'screens/Home/HomeContainer';
import LoginContainer from 'screens/Login/LoginContainer';
import ProfileContainer from 'screens/Profile/ProfileContainer';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const RootNavigator = createStackNavigator({
  Home: { screen: HomeContainer },
  Login: { screen: LoginContainer },
  Profile: { screen: ProfileContainer },
}, {
  initialRouteName: 'Home',
});

const defaultGetStateForAction = RootNavigator.router.getStateForAction;

RootNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'PushTwoProfiles') {
    const routes = [
      ...state.routes,
      { key: 'A', routeName: 'Profile', params: { name: action.name1 } },
      { key: 'B', routeName: 'Profile', params: { name: action.name2 } },
    ];
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  return defaultGetStateForAction(action, state);
};

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(RootNavigator);

export { RootNavigator, AppNavigator, middleware };

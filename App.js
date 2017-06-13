import React from 'react';
import { StackNavigator } from 'react-navigation';

import FightersListNavigator from './src/navigators/FightersListNavigator';

const UFCFightersApp = StackNavigator(
  {
    FightersList: { screen: FightersListNavigator },
  },
  {
    initialRouteName: 'FightersList',
  },
);

export default () => <UFCFightersApp />;

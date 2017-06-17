import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TabViewAnimated, TabBar, TabViewPagerPan } from 'react-native-tab-view';
import type { NavigationState } from 'react-native-tab-view/types';

import ActiveFightersScene from '../scenes/ActiveFightersScene';
import RetiredFightersScene from '../scenes/RetiredFightersScene';

type Route = {
  key: string,
  title: string,
};

type State = NavigationState<Route>;

export default class FightersListNavigator extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Top 20 UFC Fighters',
    headerStyle: { height: 80, paddingTop: 25, },
  });

  state: State = {
    index: 0,
    routes: [
      { key: '0', title: 'Active' },
      { key: '1', title: 'Retired' },
    ],
  };

  _renderTabHeader = props => {
    return (
      <TabBar
        {...props}
        style={{
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingBottom: 10,
          justifyContent: 'center',
        }}
        tabStyle={{ height: 25 }}
        indicatorStyle={{
          borderWidth: 1,
          borderColor: '#000',
        }}
        renderLabel={({ route }) =>
            <Text>{route.title.toUpperCase()}</Text>
        }
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '0':
        return (
          <ActiveFightersScene/>
        );
      case '1':
        return (
          <RetiredFightersScene />
        );
      default:
        return null;
    }
  };

  _handleChangeTab = index => {
    this.setState({
      index,
    });
  };

  _renderPager = props => <TabViewPagerPan {...props} />;

  render() {
    return (
      <TabViewAnimated
        style={{ flex: 1 }}
        navigationState={this.state}
        renderHeader={this._renderTabHeader}
        renderScene={this._renderScene}
        onRequestChangeTab={this._handleChangeTab}
        renderPager={this._renderPager}
      />
    );
  }
}

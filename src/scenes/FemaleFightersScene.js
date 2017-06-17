import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

export default class RetiredFightersScene extends PureComponent {

  _renderFighters = () => {
    return (
      <Text>{'Coming soon...'}</Text>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>
          {this._renderFighters()}
        </ScrollView>
      </View>
    );
  }
}

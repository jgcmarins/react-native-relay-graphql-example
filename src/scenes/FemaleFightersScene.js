import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

export default class FemaleFightersScene extends PureComponent {

  _renderFighters = () => {
    var fighters = [];
    for(var i = 0 ; i < 10 ; i++) {
      fighters.push(
        <Text key={i}>{i}</Text>
      );
    }
    return fighters;
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

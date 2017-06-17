import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

export default class FightersListItem extends PureComponent {

  render() {
    const { fighter } = this.props;
    return (
      <Text>{fighter.firstName + ' ' + fighter.lastName}</Text>
    );
  }
}

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class FightersListItem extends PureComponent {

  _calculateWinRate = (wins, losses, draws) => {
    var total = wins + losses + draws;
    return Math.round(((wins/total) * 100));
  }

  render() {
    const { fighter } = this.props;
    const { navigate } = this.props.navigation
    const { wins, losses, draws } = fighter;
    return (
      <TouchableOpacity onPress={() => navigate('FighterDetailNavigator', {fighter})}>
      <View style={{
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 60, height: 60, marginRight: 10 }} source={{ uri: fighter.profileImage }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 18 }}>{fighter.firstName + ' ' + fighter.lastName}</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>{fighter.nickname}</Text>
          </View>
        </View>
        <View style={{ marginRight: 5 }}>
          <Text>{'Win rate: ' + this._calculateWinRate(wins, losses, draws) + '%'}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

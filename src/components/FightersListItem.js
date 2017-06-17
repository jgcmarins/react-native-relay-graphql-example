import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class FightersListItem extends PureComponent {

  render() {
    const { fighter } = this.props;
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity onPress={() => navigate('FighterDetailNavigator', {fighter})}>
      <View style={{
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
      }}>
        <Image style={{ width: 60, height: 60, marginRight: 10 }} source={{ uri: fighter.profileImage }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18 }}>{fighter.firstName + ' ' + fighter.lastName}</Text>
          <Text style={{ fontSize: 16, color: 'grey' }}>{fighter.nickname}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

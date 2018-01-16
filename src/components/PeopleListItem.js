import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class PeopleListItem extends PureComponent {

  _calculateWinRate = (wins, losses, draws) => {
    var total = wins + losses + draws;
    return Math.round(((wins/total) * 100));
  }

  _calculateIMC = (height, mass) => {
      return mass / (height*height);
  }

  render() {
    const { person } = this.props;
    const { navigate } = this.props.navigation
    const { height, mass } = person;
    return (
      <TouchableOpacity onPress={() => navigate('PersonDetailNavigator', {person})}>
      <View style={{
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 18 }}>{person.name} </Text>
          {/* <Image style={{ width: 60, height: 60, marginRight: 10 }} source={{ uri: fighter.profileImage }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 18 }}>{fighter.firstName + ' ' + fighter.lastName}</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>{fighter.nickname}</Text>
          </View> */}
        </View>
        {/* <View style={{ marginRight: 5 }}>
          <Text>{'Win rate: ' + this._calculateWinRate(wins, losses, draws) + '%'}</Text>
        </View> */}
      </View>
      </TouchableOpacity>
    );
  }
}

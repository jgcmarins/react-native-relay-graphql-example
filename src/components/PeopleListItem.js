import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class PeopleListItem extends PureComponent {

  _calculateBMI = (height, mass) => {
    const bmi = mass / (height*height)*10000; 
    return bmi.toFixed(2)
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
        justifyContent: 'space-between'
      }}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 18 }}>{person.name} </Text>
        <Text style={{ fontSize: 18 }}>{'Species: ' + person.species}</Text>
        <Text style={{ fontSize: 16, color: 'grey' }}>{'Homeworld: ' + person.homeworld}</Text>
      </View>
      <View style={{ marginRight: 5 }}>
        <Text>{'BMI: ' + this._calculateBMI(height, mass)}</Text>
      </View>
      </View>
      </TouchableOpacity>
    );
  }
}

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

import PeopleListItem from './PeopleListItem';

export default class PeopleList extends PureComponent {

    _renderPeople = (allPeople, race) => {
    var people = new Array();
    allPeople.map(person => {
        if (race == "Robot" && person.gender == 'n/a') {
            people.push(person)
        } else if (race != 'Robot' && person.gender != 'n/a') {
            people.push(person)
        }
    });

    // fighters = fighters.sort((A, B) => {
    //   var totalA = (A.wins + A.losses + A.draws);
    //   var rateA = Math.round((A.wins/totalA) * 100);
    //   var totalB = (B.wins + B.losses + B.draws);
    //   var rateB = Math.round((B.wins/totalB) * 100);
    //   return (rateB - rateA);
    // });

    var peopleList = people.map(person => {
      return (
        <PeopleListItem
          key={person.name}
          person={person}
          navigation={this.props.navigation}
        />
      );
    });

    return peopleList;
  }

  render() {
    const { allPeople, race } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>
          {this._renderPeople(allPeople, race)}
        </ScrollView>
      </View>
    );
  }
}

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

import PeopleListItem from './PeopleListItem';

export default class PeopleList extends PureComponent {

    _renderPeople = (allPeople, race) => {
    var people = new Array();
    allPeople.map(person => {
        if (person.mass < 0 || person.height < 0) {
          return;
        }
        if (race == "Droid" && person.species == "Droid") {
            people.push(person)
        } else if (race != 'Droid' && person.species != "Droid") {
            people.push(person)
        }
    });

    people = people.sort((A, B) => {
      var bmiA = A.mass / (A.height*A.height);
      var bmiB = B.mass / (B.height*B.height);
      return bmiB - bmiA;
    })

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

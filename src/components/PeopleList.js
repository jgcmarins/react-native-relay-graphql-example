import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl, } from 'react-native';

import PeopleListItem from './PeopleListItem';
export default class PeopleList extends PureComponent {

    _renderPeople = (allPeople) => {
    var people = new Array();
    allPeople.map(person => {
        if (person.mass < 0 || person.height < 0) {
          return;
        } else {
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
    const { allPeople, isRefreshing } = this.props;
    console.log(this.props)
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}/>
        }>
          {this._renderPeople(allPeople)}
        </ScrollView>
      </View>
    );
  }
}

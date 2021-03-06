import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

import FightersListItem from './FightersListItem';

export default class FightersList extends PureComponent {

  _renderFighters = (allFighters, gender) => {
    var fighters = new Array();
    allFighters.map(fighter => {
      if(fighter.weightClass && fighter.beltThumbnail !== null) {
        if(!fighter.weightClass.includes('Women') && gender === 'male') {
          fighters.push(fighter);
        } else if(fighter.weightClass.includes('Women') && gender === 'female') {
          fighters.push(fighter);
        }
      }
    });

    fighters = fighters.sort((A, B) => {
      var totalA = (A.wins + A.losses + A.draws);
      var rateA = Math.round((A.wins/totalA) * 100);
      var totalB = (B.wins + B.losses + B.draws);
      var rateB = Math.round((B.wins/totalB) * 100);
      return (rateB - rateA);
    });

    var fightersList = fighters.map(fighter => {
      return (
        <FightersListItem
          key={fighter._id}
          fighter={fighter}
          navigation={this.props.navigation}
        />
      );
    });

    return fightersList;
  }

  render() {
    const { allFighters, gender } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>
          {this._renderFighters(allFighters, gender)}
        </ScrollView>
      </View>
    );
  }
}

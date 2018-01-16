import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';
import Relay, {
  graphql,
  QueryRenderer,
} from 'react-relay';

import environment from '../environment';
import PeopleList from '../components/PeopleList';

export default class PeopleScene extends PureComponent {

  render() {

    return (
      <QueryRenderer
        environment={ environment }
        query={ graphql`
          query PeopleSceneQuery {
            allPeople {
              name
              height
              mass
              gender
              hairColor
              birthYear
              homeworld
              species
              films
            }
          }
        `}
        render={({error, props}) => {
          if(error) {
            return (<View style={{ flex: 1, backgroundColor: '#fff' }}><Text>{error.message}</Text></View>);
          } else if(props) {
            return (
              <PeopleList
                navigation={this.props.navigation}
                allPeople={props.allPeople}
                race={this.props.race}
              />
            );
          } else {
            return (<View style={{ flex: 1, backgroundColor: '#fff' }}><Text>{'Loading...'}</Text></View>);
          }
        }}
      />
    );
  }
}

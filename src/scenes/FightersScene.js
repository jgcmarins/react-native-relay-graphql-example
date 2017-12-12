import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';
import Relay, {
  graphql,
  QueryRenderer,
} from 'react-relay';

import environment from '../environment';
import FightersList from '../components/FightersList';

export default class FightersScene extends PureComponent {

  render() {

    return (
      <QueryRenderer
        environment={ environment }
        query={ graphql`
          query FightersSceneQuery {
            allFighters {
              _id
              profileImage
              firstName
              lastName
              nickname
              weightClass
              wins
              losses
              draws
              beltThumbnail
              link
            }
          }
        `}
        render={({error, props}) => {
          if(error) {
            return (<View style={{ flex: 1, backgroundColor: '#fff' }}><Text>{error.message}</Text></View>);
          } else if(props) {
            return (
              <FightersList
                navigation={this.props.navigation}
                allFighters={props.allFighters}
                gender={this.props.gender}
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

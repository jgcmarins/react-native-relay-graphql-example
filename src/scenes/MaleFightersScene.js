import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';
import Relay, {
  graphql,
  QueryRenderer,
} from 'react-relay';

import environment from '../createRelayEnvironment';

export default class MaleFightersScene extends PureComponent {

  _renderFighters = (allFighters) => {
    var array = [];
    allFighters.map(fighter => {
      if(fighter.nickname) array.push(<Text key={fighter._id}>{fighter.nickname}</Text>)
    });
    return array;
  }

  render() {
    return (
      <QueryRenderer
        environment={ environment }
        query={ graphql`
          query MaleFightersSceneQuery {
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
            return (<View><Text>{error.message}</Text></View>);
          } else if(props) {
            return (
              <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                  {this._renderFighters(props.allFighters)}
                </ScrollView>
              </View>
            );
          } else {
            return (<View><Text>Loading...</Text></View>);
          }
        }}
      />
    );
  }
}

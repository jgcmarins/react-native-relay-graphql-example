import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default class FighterDetailNavigator extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.fighter.firstName + ' ' + navigation.state.params.fighter.lastName,
    headerStyle: { height: 80, paddingTop: 25, },
  });

  render() {
    const {
      _id,
      profileImage,
      firstName,
      lastName,
      nickname,
      weightClass,
      wins,
      losses,
      draws,
      beltThumbnail,
      link,
    } = this.props.navigation.state.params.fighter;
    return (
      <View style={{
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 5,
      }}>
        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
          {nickname ? <Text style={{ fontSize: 24 }}>{'\"' + nickname + '\"'}</Text> : null}
          <Image style={{ width: 300, height: 300 }} source={{ uri: beltThumbnail }} />
        </View>
        <View style={{
          flexDirection:
          'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
          <Text style={{ color: 'blue' }}>{'Wins: ' + wins}</Text>
          <Text style={{ color: 'red' }}>{'Losses: ' + losses}</Text>
          <Text style={{ color: 'grey' }}>{'Draws: ' + draws}</Text>
        </View>
      </View>
    );
  }
}

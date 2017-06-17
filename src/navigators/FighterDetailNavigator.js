import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';

import Button from '../components/common/Button';

export default class FighterDetailNavigator extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.fighter.firstName + ' ' + navigation.state.params.fighter.lastName,
    headerStyle: { height: 80, paddingTop: 25, },
  });

  _onPressHandler = (url) => { Linking.openURL(url) }

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
        justifyContent: 'space-between',
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
          <Text style={{ color: 'blue', fontSize: 16, }}>{'Wins: ' + wins}</Text>
          <Text style={{ color: 'red', fontSize: 16, }}>{'Losses: ' + losses}</Text>
          <Text style={{ color: 'grey', fontSize: 16, }}>{'Draws: ' + draws}</Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Button onPress={() => this._onPressHandler(link)}>{'Full description'}</Button>
        </View>
      </View>
    );
  }
}

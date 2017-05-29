import React from 'react'
import { StyleSheet, View, Image, Text, Linking } from 'react-native'

import FighterCard from './FighterCard'
import FighterCardSection from './FighterCardSection'
import Button from './Button'

export default class FighterDetail extends React.Component {

  onPressHandler = (url) => { Linking.openURL(url) }

  render() {
    const { fighter } = this.props
    const {
      profile_image,
      first_name, last_name,
      nickname,
      weight_class,
      wins,
      losses,
      draws,
      belt_thumbnail,
      link,
    } = fighter
    const {
      thumbnailContainer,
      thumbnailStyle,
      textContainer,
      nameStyle,
      statusContainer,
      imageContainer,
      imageStyle,
    } = styles
    return (
      <FighterCard>
        <FighterCardSection>
          <View style={thumbnailContainer}>
            <Image style={thumbnailStyle} source={{ uri: profile_image }} />
          </View>
          <View style={textContainer}>
            <Text style={nameStyle}>{first_name + ' ' + last_name}</Text>
            <Text>{nickname}</Text>
            <Text>{weight_class}</Text>
          </View>
          <View style={statusContainer}>
            <Text style={{ color: 'rgb(0, 122, 255)'}}>{'Wins: ' + wins}</Text>
            <Text style={{ color: 'rgb(255, 59, 48)'}}>{'Losses: ' + losses}</Text>
            <Text style={{ color: '#a9a9a9'}}>{'Draws: ' + draws}</Text>
          </View>
        </FighterCardSection>

        <FighterCardSection style={imageContainer}>
          <Image style={imageStyle} source={{ uri: belt_thumbnail }} />
        </FighterCardSection>

        <FighterCardSection>
          <Button onPress={() => this.onPressHandler(link)}>{'Full description'}</Button>
        </FighterCardSection>
      </FighterCard>
    )
  }
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  nameStyle: {
    fontSize: 18,
  },
  statusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
})

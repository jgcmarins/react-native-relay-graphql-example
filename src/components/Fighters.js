import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './Header'
import FightersList from './FightersList'

export default class Fighters extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header label={'Top 20 UFC Fighters'} />
        <FightersList />
      </View>
    )
  }
}

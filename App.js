import React from 'react'
import { View } from 'react-native'

import Fighters from './src/components/Fighters'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Fighters />
      </View>
    )
  }
}

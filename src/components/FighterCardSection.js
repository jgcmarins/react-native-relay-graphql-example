import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class FighterCardSection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
})

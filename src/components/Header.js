import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Header extends React.Component {
  render() {
    const { headerContainer, textStyle } = styles
    return (
      <View style={headerContainer}>
        <Text style={textStyle}>{this.props.header}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
})

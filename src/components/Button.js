import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class Button extends React.Component {
  render() {
    const { onPress, children } = this.props
    const { buttonStyle, textStyle } = styles
    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(0, 122, 255)',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: 'rgb(0, 122, 255)',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

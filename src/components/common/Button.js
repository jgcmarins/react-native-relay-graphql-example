import React, { PureComponent } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class Button extends PureComponent {
  render() {
    const { onPress, children } = this.props
    const { container, label } = styles
    return (
      <TouchableOpacity style={container} onPress={onPress}>
        <Text style={label}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(0, 122, 255)',
    marginLeft: 5,
    marginRight: 5
  },
  label: {
    alignSelf: 'center',
    color: 'rgb(0, 122, 255)',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

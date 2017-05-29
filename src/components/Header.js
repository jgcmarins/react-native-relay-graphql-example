import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Header extends React.Component {
  render() {
    const { label } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
  label: {
    fontSize: 20,
    fontWeight: '600',
  },
})

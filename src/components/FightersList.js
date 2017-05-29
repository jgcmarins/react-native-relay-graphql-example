import React from 'react'
import { ScrollView, Text } from 'react-native'

import FighterDetail from './FighterDetail'

export default class FightersList extends React.Component {
  state = {
      fighters: [],
  }

  componentWillMount = () => {
    fetch('http://ufc-data-api.ufc.com/api/v3/iphone/fighters')
    .then(res => res.json())
    .then(array => {
      var fighters = array.map(fighter => {
        if(fighter['belt_thumbnail'] !== undefined) return fighter
      })
      fighters = fighters.filter(fighter => {
        return fighter !== undefined
      })
      fighters = fighters.sort((A, B) => {
        return B['wins'] - A['wins']
      })
      fighters = fighters.slice(0, 20)
      this.setState({ fighters })
    })
  }

  renderFighters = () => {
    return this.state.fighters.map((fighter) => {
      return <FighterDetail key={fighter.id} fighter={fighter}/>
    })
  }

  render() {
    return (
      <ScrollView style={{ marginBottom: 10 }}>
        {this.renderFighters()}
      </ScrollView>
    )
  }
}

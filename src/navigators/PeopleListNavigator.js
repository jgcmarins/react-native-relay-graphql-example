import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

import PeopleList from '../components/PeopleList';

import { request } from 'graphql-request'

const urlGraphServer = 'https://graphql-sw-api-gxmdjgcfhi.now.sh';

export default class PeopleListNavigator extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      page: 1,
      isFetching: false
    };
    this._fetchData(1)
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Star Wars Characters',
    headerStyle: { height: 80, paddingTop: 25, },
  });

  _fetchData = (page) => {
    //skip if already fetching or page greater than 9
    //should never happen!
    if (page > 9 || this.state.isFetching == true) {
      return;
    }
    //do not set state if page is 1
    if (page>1) {
      this.setState(previousState => {
        return {...previousState, isFetching:true}
      })
    }
    const query = `
    {
      peoplePage(page:`+page+`) {
        name
        height
        mass
        hairColor
        birthYear
        species
        homeworld
        films
        gender
      }
    }`
    request(urlGraphServer, query).then(data => {
      this.setState(previousState => {
        return {dataSource:[...previousState.dataSource, ...data.peoplePage], page:previousState.page+1, isFetching: false };
       });
    }).catch(error => {
      console.log("error")
      console.log(error)
    })
  }

  render() {
    if (this.state.dataSource.length == 0) {
      return (
        <View style={{alignItems: 'center'}}>
        <Text style={{fontSize:24}}> {"Loading..."}</Text>
      </View>)
    } else {
      return (
        <View style={{flex:1}}>
          <PeopleList
            navigation={this.props.navigation}
            allPeople={this.state.dataSource}
            isRefreshing={this.state.isFetching}
          /> 
          {this.state.isFetching ? <Button onPress={() => {}} title="Loading..."/> : this.state.page < 10 ? <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Button onPress={() => this._fetchData(this.state.page)} title="Load More"/>
          </View>: null}
        </View>
      );
    }
  }
}

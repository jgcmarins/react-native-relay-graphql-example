import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';

import Button from '../components/common/Button';

export default class PersonDetailNavigator extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.person.name,
    headerStyle: { height: 80, paddingTop: 25, },
  });

  _hasGender = (gender) => {
    return !(gender == 'n/a' || gender == 'none')
  }

  _calculateBMI = (height, mass) => {
    const bmi = mass / (height*height)*10000; 
    return bmi.toFixed(2)
  }

  _characterWeightStatus = (bmi, height) => {
    if (bmi < 19 && height > 156) {
      return "Skinny";
    }
    if (bmi >= 18 && bmi <= 24.5) {
      return "Healthy";
    }
    if (bmi > 24.5 && bmi <= 29.5) {
      return "Fat"
    }
    if (bmi > 29.5 && bmi < 40) {
      return "Obese"
    }
    return "Morbid Obesity"
  }

  _imageForStatus = (status) => {
    if (status == "Skinny") {
      return 'http://www.strengthsensei.com/wp-content/uploads/2016/05/skinny.jpg';
    }
    if (status == "Healthy") {
      return 'http://www.panthervalleyclub.com/wp-content/uploads/2017/11/healthybody_11.png';
    }
    if (status == "Fat") {
      return 'http://i.telegraph.co.uk/multimedia/archive/03399/fatbloke1_3399316b.jpg';
    }
    if (status == "Obese") {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Central_Obesity_008.jpg/798px-Central_Obesity_008.jpg';
    }
    return 'http://scarysymptoms.com/wp-content/uploads/2014/09/super-morbidly-300x198.png'
  }

  render() {
    const {
      name,
      gender,
      hairColor,
      birthYear,
      height,
      mass,
      films,
      species,
      homeworld
    } = this.props.navigation.state.params.person;

    return (
      <View style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'column',
        flex: 1
      }}>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 28 }}>{'Name: ' + name}</Text>
            {this._hasGender(gender) ? <Text style={{ fontSize: 22 }}>{"Gender: " + gender}</Text> : null}
            <Text style={{ fontSize: 22 }}>{'Species: ' + species}</Text>
            <Text style={{ fontSize: 22 }}>{'Homeworld: ' + homeworld}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20}}>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column'}}>
              <Text style={{ fontSize: 20 }}>{'Movies featured:'}</Text>
              {films.map((movieName, i) => <Text key={i}>{movieName}</Text>)}
            </View>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column'}}>
              <Text style={{ fontSize: 20 }}>{'Hair Color: ' + hairColor}</Text>
              <Text style={{ fontSize: 20 }}>{'Birth Year: ' + birthYear}</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
            <Text style={{ flex:1, fontSize: 22 }}>{'Height: '+height+"cm"}</Text>
            <Text style={{ flex:1, fontSize: 22 }}>{'Mass: '+mass+"kg"}</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: this._imageForStatus(this._characterWeightStatus(this._calculateBMI(height, mass), height))}}/>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{ fontSize: 22 }}>{'Status: '+ this._characterWeightStatus(this._calculateBMI(height, mass), height)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import Header from './Header';
const Search = ({navigation}) => {
  const [city, setCity] = useState('');
  const fetchCities = (text) => {
    setCity(text);
  };
  const btnClick = ()=>{
    navigation.navigate('Home', {city:city})
  }

  return (
    <View style={{flex: 1}}>
      <Header name="Search Screen" />
      <TextInput
        label="City Name"
        theme={{colors: {primary: '#00aaff'}}}
        onChangeText={(text) => fetchCities(text)}
      />
      <Button
        icon="content-save"
        mode="contained"
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin: 20}}
        onPress={() => btnClick()}>
        <Text style={{color: 'white'}}>Search</Text>
      </Button>
    </View>
  );
};

export default Search;

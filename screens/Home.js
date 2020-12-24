/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Title, Card} from 'react-native-paper';
import {View, Image} from 'react-native';
import Header from './Header';

const Home = () => {
  const [info, setInfo] = useState({
    name: 'loading',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading',
  });
  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=london&APPID=7f3dbac0a05234ec606f10f9c68c189d&units=metric',
    )
      .then((data) => data.json())
      .then((results) => {
        console.log(results);
        setInfo({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
        });
      });
  };

  return (
    <View style={{flex: 1}}>
      <Header name="Weather App" />
      <View style={{alignItems:"center"}}>
        <Title
          style={{
            color: '#00aaff',
            marginTop: 30,
            fontSize: 30,
          }}>
          {info.name}
        </Title>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={{
            uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
          }} 
        />
      </View>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}>
        <Title style={{color: '#00aaff'}}> Temperature = {info.temp}</Title>
      </Card>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}>
        <Title style={{color: '#00aaff'}}> Humidity = {info.humidity}</Title>
      </Card>
      <Card
        style={{
          margin: 5,
          padding: 12,
        }}>
        <Title style={{color: '#00aaff'}}> Description = {info.desc}</Title>
      </Card>
    </View>
  );
};

export default Home;

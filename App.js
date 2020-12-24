import React from 'react';
import {StatusBar} from 'react-native';

import Search from './screens/Search';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name == 'Home') {
                iconName = 'home-city-outline'
              }else if(route.name == 'Search'){
                iconName = 'city'
              }
              return <MaterialCommunityIcons name={iconName} size={25} color={color}/>
            }
          })}
          tabBarOption={{
            activeTintColor: "white",
            inactiveTintColor: "gray"
          }}
          >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

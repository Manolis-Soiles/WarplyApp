import React from 'react';
import { Alert, Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import List from './List.js';

//Map is displayed
class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map</Text>
      </View>
    );
  }
}

//List is displayed
class ListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <List/>
      </View>
    );
  }
}

//Navigate between Map and List
const TabNavigator = createBottomTabNavigator({
  Map: { screen: MapScreen },
  List: { screen: ListScreen },
});

const AppContainer = createAppContainer(TabNavigator);
export default class TabContainer extends React.Component {
  render(){
    return <AppContainer/>;
  }
}

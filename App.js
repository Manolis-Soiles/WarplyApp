import React from 'react';
import { Alert, Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import TabContainer from './Screen2'; //Import Screen2 implementation
import jsonReducer from './src/reducers'

//Create store with middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(jsonReducer);

//First screen. Hitting button navigates to Screen 2
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Welcome</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
        title="Go to Screen 2"
        onPress={() => this.props.navigation.navigate('Screen2')}
        />
        </View>
      </View>
    );
  }
}

//Navigate between 1st and 2nd Screen
//TabContainer component is imported
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen2: TabContainer,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

import 'react-native-gesture-handler';
import React from 'react';
import AppCointainer from './components/AppContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './utils/navigationTypes';

// Screens Imports
import LoginScreen from './screens/Login';

const App = () => {
  const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <AppCointainer>
        <Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: 'transparent'},
          }}>
          <Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerTransparent: true}}
          />
        </Navigator>
      </AppCointainer>
    </NavigationContainer>
  );
};

export default App;

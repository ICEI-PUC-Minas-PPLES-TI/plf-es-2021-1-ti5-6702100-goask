import 'react-native-gesture-handler';
import React from 'react';
import AppCointainer from './components/AppContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './utils/navigationTypes';

// Screens Imports
import NameLogin from './screens/NameLogin';
import RoomLogin from './screens/RoomLogin';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppCointainer>
          <Navigator
            initialRouteName="NameLogin"
            screenOptions={{
              headerShown: false,
              cardStyle: {backgroundColor: 'transparent'},
            }}>
            <Screen
              name="NameLogin"
              component={NameLogin}
              options={{headerTransparent: true}}
            />
            <Screen
              name="RoomLogin"
              component={RoomLogin}
              options={{headerTransparent: true}}
            />
          </Navigator>
        </AppCointainer>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

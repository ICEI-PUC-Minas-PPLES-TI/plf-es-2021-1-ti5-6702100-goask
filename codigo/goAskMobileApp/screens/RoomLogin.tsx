import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppInput from '../components/AppInput';
import {RootStackParamList} from '../utils/navigationTypes';
import Styles from '../utils/styles';
import {Icon} from 'react-native-elements';
import {COLORS} from '../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RoomLogin'>;
  route: RouteProp<RootStackParamList, 'RoomLogin'>;
}

const RoomLogin: React.FC<Props> = (props) => {
  const {navigation} = props;

  const [roomName, setRoomName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.backIconView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="arrow-back-circle-outline"
            type="ionicon"
            color={COLORS.ICONS}
            size={40}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <Image source={require('../static/Logo.png')} style={styles.logo} />
      <Text style={styles.text}>
        Insira o seu nome da sala para ingressar no quizz.
      </Text>
      <View style={styles.inputContainer}>
        <AppInput
          value={roomName}
          setValue={setRoomName}
          style={styles.input}
          placeholder="Digite o nome da sua sala"
          hasIcon={true}>
          <Icon
            name="door-open"
            type="font-awesome-5"
            size={40}
            style={styles.icon}
            color={COLORS.ICONS}
          />
        </AppInput>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Icon
          name="arrow-forward-circle"
          type="ionicon"
          color={COLORS.ICONS}
          size={100}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
  logo: {
    marginTop: 30,
    width: 105,
    height: 160,
    resizeMode: 'contain',
  },
  text: {
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '90%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '90%',
    marginBottom: 40,
  },
  icon: {
    marginHorizontal: 30,
  },
  backIconView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backIcon: {marginLeft: 30, marginTop: 10},
});

export default RoomLogin;

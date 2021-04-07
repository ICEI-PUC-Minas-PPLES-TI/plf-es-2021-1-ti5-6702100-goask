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
  navigation: StackNavigationProp<RootStackParamList, 'NameLogin'>;
  route: RouteProp<RootStackParamList, 'NameLogin'>;
}

const NameLogin: React.FC<Props> = (props) => {
  const {navigation} = props;

  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../static/Logo.png')} style={styles.logo} />
      <Text style={styles.text}>
        Insira o seu nome abaixo para continuar o acesso.
      </Text>
      <View style={styles.inputContainer}>
        <AppInput
          value={name}
          setValue={setName}
          style={styles.input}
          placeholder="Digite o seu nome"
          hasIcon={true}>
          <Icon
            name="person-circle-sharp"
            type="ionicon"
            size={60}
            style={styles.icon}
            color={COLORS.ICONS}
          />
        </AppInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RoomLogin', {});
        }}>
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
    marginTop: 100,
    width: 100,
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
});

export default NameLogin;

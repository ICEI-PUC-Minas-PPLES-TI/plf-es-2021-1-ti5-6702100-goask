import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {BackHandler, Image, StyleSheet, Text, View} from 'react-native';
import LoadingAnimation from '../components/LoadingAnimation';
import {useAppSelector} from '../utils/hooks';
import {RootStackParamList} from '../utils/navigationTypes';
import Styles from '../utils/styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'SecondLoading'>;
  route: RouteProp<RootStackParamList, 'SecondLoading'>;
}

const SecondLoading: React.FC<Props> = (props) => {
  const {navigation} = props;
  const results = useAppSelector((state) => state.webSocket.results);

  useEffect(() => {
    // Remove Android back button listener
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  useEffect(() => {
    if (results) {
      navigation.navigate('Ranking', {});
    }
  }, [navigation, results]);

  return (
    <View style={styles.container}>
      <Image source={require('../static/Logo.png')} style={styles.logo} />
      <LoadingAnimation style={styles.animated} />
      <Text style={styles.text}>
        Aguarde enquanto os resultados são carregados...
      </Text>
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
    marginTop: 20,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  animated: {
    marginVertical: 30,
  },
});

export default SecondLoading;

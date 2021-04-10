import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LoadingAnimation from '../components/LoadingAnimation';
import {useAppDispatch} from '../utils/hooks';
import {RootStackParamList} from '../utils/navigationTypes';
import Styles from '../utils/styles';
import {changeQuestions, changeRoom} from '../store/roomSlice';
import {mockedQuestions, mockedRoom} from '../mock';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Loading'>;
  route: RouteProp<RootStackParamList, 'Loading'>;
}

const Loading: React.FC<Props> = (props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  // TODO
  useEffect(() => {
    // Mock
    dispatch(changeQuestions(mockedQuestions));
    dispatch(changeRoom(mockedRoom));

    setTimeout(() => {
      navigation.navigate('Question', {
        questionId: 0,
      });
    }, 5000);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../static/Logo.png')} style={styles.logo} />
      <LoadingAnimation style={styles.animated} />
      <Text style={styles.text}>
        O seu quiz está sendo carregado e logo estará pronto.
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

export default Loading;

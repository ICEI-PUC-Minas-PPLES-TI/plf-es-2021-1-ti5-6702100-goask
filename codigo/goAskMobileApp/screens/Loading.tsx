import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect} from 'react';
import {BackHandler, Image, StyleSheet, Text, View} from 'react-native';
import LoadingAnimation from '../components/LoadingAnimation';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {RootStackParamList} from '../utils/navigationTypes';
import Styles from '../utils/styles';
import {getRoomByName} from '../api';
import {changeQuestions, changeRoom} from '../store/roomSlice';
import {IRoom} from '../types/room';
import {IQuestion} from '../types/question';
import AppWebSocket from '../api/AppWebSocket';
import {
  setConnectingToWebSocketStage,
  setWaitingForQuizToStartStage,
} from '../store/loadingSlice';
import {addConnectionRetry} from '../store/webSocketSlice';

export const LOADING_MESSAGES = {
  FETCHING_ROOM: 'A sala selecionada está sendo buscada...',
  CONNECTING_WEB_SOCKET:
    'A sala selecionada foi encontrada! Abrindo a conexão em tempo real..',
  WAITING_QUIZ: 'Conexão aberta! Aguardando inicio do quiz...',
};

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Loading'>;
  route: RouteProp<RootStackParamList, 'Loading'>;
}

const Loading: React.FC<Props> = (props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const roomName = useAppSelector((state) => state.users.roomName);
  const quizStarted = useAppSelector((state) => state.webSocket.hasStarted);
  const webSocketError = useAppSelector((state) => state.webSocket.error);
  const webSocketIsCreated = useAppSelector(
    (state) => state.webSocket.isCreated,
  );
  const webSocketIsConnected = useAppSelector(
    (state) => state.webSocket.isOpened,
  );
  const connectionsRetry = useAppSelector(
    (state) => state.webSocket.connectionsRetry,
  );
  const loadingMessage = useAppSelector((state) => state.loading.loadingText);
  const loadingStage = useAppSelector((state) => state.loading.loadingStage);

  const goBackWithErrorMessage = useCallback(
    (errorMessage) => {
      navigation.navigate('RoomLogin', {error: errorMessage});
    },
    [navigation],
  );

  const goBackWithNoErrorMessage = useCallback(() => {
    navigation.navigate('RoomLogin', {});
  }, [navigation]);

  const getRoomAndQuestions = useCallback(async () => {
    try {
      const room = await getRoomByName(roomName);
      if (!room) {
        throw new Error('Não foi encontrada nenhuma sala com esse nome :(');
      } else {
        const Room: IRoom = {
          createdAt: room.createdAt,
          isActive: room.isActive,
          isRunning: room.isRunning,
          name: room.name,
          idRoom: room.idRoom,
        };
        const Questions: IQuestion[] = room.test.questions;
        dispatch(changeRoom(Room));
        dispatch(changeQuestions(Questions));
        dispatch(setConnectingToWebSocketStage({}));
      }
    } catch (error) {
      throw error;
    }
  }, [dispatch, roomName]);

  const loadWebSocket = useCallback(() => {
    try {
      AppWebSocket.init();
    } catch (error) {
      console.log(error);
      throw new Error(
        'Houve um erro ao se tentar fazer conexão em tempo real com a API :(',
      );
    }
  }, []);

  const sendConnectMessage = useCallback(() => {
    try {
      AppWebSocket.sendConnectMessage();
      dispatch(setWaitingForQuizToStartStage({}));
    } catch (error) {
      console.log(error);
      throw new Error(
        'Houve um erro ao se tentar fazer conexão em tempo real com a API :(',
      );
    }
  }, [dispatch]);

  useEffect(() => {
    // Remove Android back button listener
    BackHandler.addEventListener('hardwareBackPress', () => {
      goBackWithNoErrorMessage();
      return true;
    });

    switch (loadingStage) {
      case 'fecthingQuestions':
        getRoomAndQuestions().catch((error: Error) =>
          goBackWithErrorMessage(error.message),
        );
        break;
      case 'connectingToWebSocket':
        try {
          if (!webSocketIsCreated) {
            loadWebSocket();
          }
          if (webSocketIsConnected) {
            sendConnectMessage();
          } else {
            if (connectionsRetry > 24) {
              goBackWithErrorMessage(
                'A conexão em tempo real com a API estorou o número de tentativas :(',
              );
            } else {
              console.log(
                `[Loading] WebSocket connection retry ${connectionsRetry + 1}`,
              );
              setTimeout(function () {
                dispatch(addConnectionRetry({}));
              }, 3000);
            }
          }
        } catch (error) {
          goBackWithErrorMessage(error.message);
        }
        break;
      case 'waitingForQuizToStart':
        break;
    }
  }, [
    dispatch,
    getRoomAndQuestions,
    goBackWithErrorMessage,
    goBackWithNoErrorMessage,
    loadWebSocket,
    loadingStage,
    webSocketIsCreated,
    webSocketIsConnected,
    connectionsRetry,
    sendConnectMessage,
  ]);

  useEffect(() => {
    if (webSocketError && loadingStage === 'connectingToWebSocket') {
      goBackWithErrorMessage(webSocketError);
    }
  }, [goBackWithErrorMessage, webSocketError, loadingStage]);

  useEffect(() => {
    if (quizStarted && loadingStage === 'waitingForQuizToStart') {
      navigation.navigate('Question', {});
    }
  }, [navigation, quizStarted, loadingStage]);

  console.log(`[Loading]: Render with ${loadingStage}`);

  return (
    <View style={styles.container}>
      <Image source={require('../static/Logo.png')} style={styles.logo} />
      <LoadingAnimation style={styles.animated} />
      <Text style={styles.text}>{loadingMessage}</Text>
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

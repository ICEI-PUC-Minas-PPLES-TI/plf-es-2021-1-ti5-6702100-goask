import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import {increaseNumberOfQuestionsAnswered} from '../store/roomSlice';
import {IAnswer} from '../types/question';
import {CONTAINER_STYLE_COLORS} from '../utils/colors';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {RootStackParamList} from '../utils/navigationTypes';
import AppWebSocket from '../api/AppWebSocket';
import Styles from '../utils/styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Question'>;
  route: RouteProp<RootStackParamList, 'Question'>;
}

const Question: React.FC<Props> = (props) => {
  const {navigation} = props;
  const questions = useAppSelector((state) => state.room.questions!);
  const numberOfQuestionsAnswered = useAppSelector(
    (state) => state.room.numberOfQuestionsAnswered,
  );
  const room = useAppSelector((state) => state.room.room);
  const dispatch = useAppDispatch();

  const [minutesLeft, setMinutesLeft] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const sendAnswer = useCallback(
    (isCorrect: boolean) => {
      AppWebSocket.sendAnswer(isCorrect);
      if (numberOfQuestionsAnswered + 1 === questions?.length) {
        navigation.replace('SecondLoading', {});
      } else {
        dispatch(increaseNumberOfQuestionsAnswered({}));
      }
    },
    [dispatch, navigation, numberOfQuestionsAnswered, questions],
  );

  useEffect(() => {
    // Remove Android back button listener
    BackHandler.addEventListener('hardwareBackPress', () => true);
  });

  // Create timer
  useEffect(() => {
    let isMouted = true;
    setTimeout(() => {
      if (secondsLeft > 0 && isMouted) {
        setSecondsLeft(secondsLeft - 1);
      } else {
        if (minutesLeft > 0 && isMouted) {
          setMinutesLeft(minutesLeft - 1);
          setSecondsLeft(59);
        } else {
          // sendAnswer(false);
        }
      }
    }, 1000);

    return () => {
      isMouted = false;
    };
  }, [minutesLeft, secondsLeft, sendAnswer]);

  useEffect(() => {
    setMinutesLeft(1);
    setSecondsLeft(0);
    console.log(question?.answers);
  }, [numberOfQuestionsAnswered]);

  const question = useMemo(
    () => (questions ? questions[numberOfQuestionsAnswered] : undefined),
    [numberOfQuestionsAnswered, questions],
  );

  const handleAnswerPress = (answer: IAnswer) => {
    sendAnswer(answer.isCorrect);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../static/Logo.png')} style={styles.logo} />
        <View style={styles.roomHeader}>
          <Text style={[styles.redColor, styles.bold, styles.headerText]}>
            Sala:
          </Text>
          <Text style={[styles.redColor, styles.headerText]}>{room!.name}</Text>
          <Text style={styles.headerText}>{`${numberOfQuestionsAnswered + 1}/${
            questions!.length
          }`}</Text>
        </View>
      </View>
      <Text style={[styles.questionText, styles.bold]}>
        {question!.questionText}
      </Text>
      <View style={styles.greenCircle}>
        <Text style={[styles.timerText, styles.bold]}>
          {minutesLeft}:
          {secondsLeft.toString().length > 1
            ? secondsLeft.toString()
            : '0' + secondsLeft.toString()}
        </Text>
      </View>
      <View style={styles.answersView}>
        <View style={styles.answerRow}>
          <TouchableOpacity
            onPress={() => handleAnswerPress(question?.answers[0]!)}>
            <View style={styles.answer}>
              <View style={[styles.circleAnswer, styles.orange]}>
                <Text style={styles.circleAnswerText}>A</Text>
              </View>
              <Text style={styles.bold}>{question?.answers[0].answerText}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAnswerPress(question?.answers[1]!)}>
            <View style={styles.answer}>
              <View style={[styles.circleAnswer, styles.green]}>
                <Text style={styles.circleAnswerText}>B</Text>
              </View>
              <Text style={styles.bold}>{question?.answers[1].answerText}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.answerRow}>
          <TouchableOpacity
            onPress={() => handleAnswerPress(question?.answers[2]!)}>
            <View style={styles.answer}>
              <View style={[styles.circleAnswer, styles.blue]}>
                <Text style={styles.circleAnswerText}>C</Text>
              </View>
              <Text style={styles.bold}>{question?.answers[2].answerText}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAnswerPress(question?.answers[3]!)}>
            <View style={styles.answer}>
              <View style={[styles.circleAnswer, styles.red]}>
                <Text style={styles.circleAnswerText}>D</Text>
              </View>
              <Text style={styles.bold}>{question?.answers[3].answerText}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...Styles.container},
  logo: {
    marginTop: 12,
    marginRight: 30,
    width: 100,
    height: 160,
    resizeMode: 'contain',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 200,
  },
  roomHeader: {},
  headerText: {fontSize: 28},
  redColor: {color: '#C9515C'},
  bold: {fontWeight: 'bold'},
  questionText: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 12,
  },
  greenCircle: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    maxHeight: 120,
    borderRadius: 60,
    borderColor: CONTAINER_STYLE_COLORS.DARK_GREEN,
    borderWidth: 9,
  },
  timerText: {
    fontSize: 30,
  },
  answersView: {
    marginTop: 20,
  },
  answer: {
    borderRadius: 20,
    width: 140,
    height: 120,
    margin: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleAnswer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  orange: {
    backgroundColor: CONTAINER_STYLE_COLORS.ORANGE,
  },
  green: {
    backgroundColor: CONTAINER_STYLE_COLORS.DARK_GREEN,
  },
  blue: {
    backgroundColor: CONTAINER_STYLE_COLORS.DARK_BLUE,
  },
  red: {
    backgroundColor: CONTAINER_STYLE_COLORS.RED,
  },
  circleAnswerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  answerRow: {
    flexDirection: 'row',
  },
});

export default Question;

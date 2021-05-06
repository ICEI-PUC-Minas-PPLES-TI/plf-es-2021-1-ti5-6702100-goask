import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  BackHandler,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {RootStackParamList} from '../utils/navigationTypes';
import Styles from '../utils/styles';
import {COLORS} from '../utils/colors';
import {changeRoomName, changeUserName} from '../store/usersSlice';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Ranking'>;
  route: RouteProp<RootStackParamList, 'Ranking'>;
}

export interface Player {
  name: string;
  points: number;
  placing: number;
}

const Ranking: React.FC<Props> = (props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  const room = useAppSelector((state) => state.room.room);
  const results = useAppSelector((state) => state.webSocket.results!);

  useEffect(() => {
    // Remove Android back button listener
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  const renderPlayer: ListRenderItem<{name: string; right_answers: string}> = ({
    index,
    item,
  }) => {
    if (index === 0) {
      return (
        <View style={[styles.player, styles.winner]} key={item.name}>
          <Image
            source={require('../static/Trophy.png')}
            style={styles.trophy}
          />
          <View style={styles.playerInfo}>
            <Text style={[styles.bold, styles.text]}>{item.name}</Text>
            <Text style={[styles.points, styles.text]}>
              <Text style={styles.bold}>{item.right_answers}</Text> points
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.player} key={item.name}>
          <Text style={[styles.placingText, styles.bold]}>{index + 1}º</Text>
          <View style={styles.playerInfo}>
            <Text style={[styles.bold, styles.text]}>{item.name}</Text>
            <Text style={[styles.points, styles.text]}>
              <Text style={styles.bold}>{item.right_answers}</Text> points
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../static/Logo.png')} style={styles.logo} />
        <View>
          <Text style={[styles.redColor, styles.bold, styles.headerText]}>
            Sala:
          </Text>
          <Text style={[styles.redColor, styles.headerText]}>{room!.name}</Text>
        </View>
      </View>
      <Text style={[styles.winnerText, styles.bold]}>
        Parabéns, <Text style={styles.redColor}>{results[0].name}</Text>, você é
        o vencedor
      </Text>

      <FlatList
        data={results}
        style={styles.podium}
        renderItem={renderPlayer}
        keyExtractor={(item) => item.name}
        scrollToOverflowEnabled={true}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(changeUserName(''));
          dispatch(changeRoomName(''));
          navigation.popToTop();
        }}>
        <View style={styles.exitButton}>
          <Text style={[styles.text, styles.bold, styles.buttonText]}>
            Sair
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {...Styles.container},
  text: {fontSize: 28},
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
  headerText: {fontSize: 28},
  redColor: {color: '#C9515C'},
  bold: {fontWeight: 'bold'},
  winnerText: {
    fontSize: 28,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  podium: {
    width: '80%',
    maxHeight: 360,
    marginTop: 20,
  },
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  winner: {
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 1,
    marginBottom: 0,
    paddingBottom: 20,
  },
  trophy: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  playerInfo: {
    flexDirection: 'column',
    marginLeft: 30,
    fontSize: 28,
  },
  points: {
    flexDirection: 'row',
  },
  placingText: {
    fontSize: 60,
    marginLeft: 30,
    marginRight: 20,
  },
  exitButton: {
    backgroundColor: COLORS.ICONS,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: COLORS.BACKGROUND,
  },
});

export default Ranking;

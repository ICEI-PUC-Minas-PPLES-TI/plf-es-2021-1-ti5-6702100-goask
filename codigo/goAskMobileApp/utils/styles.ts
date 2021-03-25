import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginRight: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles
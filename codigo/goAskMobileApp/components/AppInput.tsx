import React, {Component} from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle, View} from 'react-native';
import {COLORS} from '../utils/colors';

interface Props {
  value: string;
  setValue: (text: string) => void;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  hasIcon?: boolean;
}

const AppInput: React.FC<Props> = (props) => {
  const {
    value,
    setValue,
    style,
    placeholder,
    hasIcon = false,
    children,
  } = props;

  return (
    <View style={[styles.container, style]}>
      {hasIcon && children}
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={styles.input}
        placeholder={placeholder}
        textAlign="center"
        maxLength={19}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.INPUT_BACKGROUND,
    padding: 10,
    borderRadius: 15,
    width: '90%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    fontSize: 20,
  },
});

export default AppInput;

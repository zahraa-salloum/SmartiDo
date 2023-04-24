import React, { FC } from 'react';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';

interface LabelledTextProps {
  label: string;
  placeholder: string;
}

const LabelledText: FC<LabelledTextProps> = (props) => {
  return (
    <View>
      <Text style={styles.label}> {props.label} </Text>
      <TextInput style={styles.input} placeholder= {props.placeholder}></TextInput>
    </View>
  );
};

export default LabelledText;
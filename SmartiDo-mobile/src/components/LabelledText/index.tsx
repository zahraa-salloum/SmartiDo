import React, { FC } from 'react';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';

interface LabelledTextProps {
  label: string;
  placeholder: string;
  onChangeText: any;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const LabelledText: FC<LabelledTextProps> = (props) => {
  return (
    <View>
      <Text style={styles.label}> {props.label} </Text>
      <TextInput keyboardType={props.keyboardType} style={styles.input} placeholder= {props.placeholder} onChangeText={props.onChangeText}></TextInput>
    </View>
  );
};

export default LabelledText;
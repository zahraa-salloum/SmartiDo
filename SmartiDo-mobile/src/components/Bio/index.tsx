import React, { FC } from 'react';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';

interface BioProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: any;
}

const Bio: FC<BioProps> = (props) => {
  return (
    <View>
      <Text style={styles.label}> {props.label} </Text>
      <TextInput style={styles.input} value={props.value} placeholder= {props.placeholder} onChangeText={props.onChangeText} multiline={true}></TextInput>
    </View>
  );
};

export default Bio;
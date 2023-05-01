import { Button, ButtonProps, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles';


interface LogButtonProps  {
  buttonprops: ButtonProps
}

const LogButton: FC<LogButtonProps> = (props) => {
  return (
    <>
        <TouchableOpacity  onPress={props.buttonprops.onPress} style={styles.button}>
            <Text style={styles.text}> {props.buttonprops.title} </Text>
        </TouchableOpacity>
    </>
)
}

export default LogButton
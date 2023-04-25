import { Button, ButtonProps, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'

interface TextButtonProps  {
  buttonprops: ButtonProps
}

const TextButton: FC<TextButtonProps> = (props) => {
return (
    <>
        <TouchableOpacity  onPress={props.buttonprops.onPress} style={styles.button}>
            <Text style={styles.text}> {props.buttonprops.title} </Text>
        </TouchableOpacity>
    </>
)
}

export default TextButton
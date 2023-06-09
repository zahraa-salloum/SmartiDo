import { Button, ButtonProps, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles';


interface RoundButtonProps  {
  buttonprops: ButtonProps
}

const RoundButton: FC<RoundButtonProps> = (props) => {
  return (
    <>
        <TouchableOpacity  onPress={props.buttonprops.onPress} style={styles.button}>
            <Image source = {require('../../../assets/plus.png')} ></Image>
        </TouchableOpacity>
    </>
)
}

export default RoundButton
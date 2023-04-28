import { View, Text } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import React, { FC } from 'react'
import styles from './styles'
import { colors } from '../../constants/constants'

interface TaskProps  {
    text?: string,
    onPress?: any,
}

const Task: FC<TaskProps> = (props) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox style={styles.checkbox} fillColor={colors.dark_purple} textStyle={styles.text} size={28} text={props.text} onPress={props.onPress} />
        </View>
    ) 
}

export default Task
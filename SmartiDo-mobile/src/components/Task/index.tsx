import { View, Text } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import React, { FC } from 'react'
import styles from './styles'

interface TaskProps  {
    text?: string,
    onPress?: any,
}

const Task: FC<TaskProps> = (props) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox text={props.text} onPress={props.onPress} />
        </View>
    ) 
}

export default Task
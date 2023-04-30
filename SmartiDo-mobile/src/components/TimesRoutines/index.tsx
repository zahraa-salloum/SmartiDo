import React, { FC } from 'react'
import styles from './styles'
import { View, Text } from 'react-native'


interface TimesRoutinesProps  {
    label: string;
}

const TimesRoutines: FC<TimesRoutinesProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {props.label} </Text>
        </View>
    )
}

export default TimesRoutines
import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'


interface PlanProps  {
    hour?: string,
    plan?: string,
}

const Plan: FC<PlanProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.hour}> {props.hour} </Text>
            <Text style={styles.plan}> {props.plan} </Text>
        </View>
    ) 
}

export default Plan
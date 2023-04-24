import React, { FC } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'

interface TasksScreenProps  {}

const TasksScreen: FC<TasksScreenProps> = (props) => {
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    </ImageBackground>
)
}

export default TasksScreen
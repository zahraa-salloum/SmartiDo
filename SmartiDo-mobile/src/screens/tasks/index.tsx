import React, { FC } from 'react'
import { ImageBackground } from 'react-native'
import styles from './styles'

interface TasksScreenProps  {}

const TasksScreen: FC<TasksScreenProps> = (props) => {
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
    </ImageBackground>
)
}

export default TasksScreen
import React, { FC } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'
import EmptyState from '../../components/EmptyState'
import RoundButton from '../../components/RoundButton'
import Task from '../../components/Task'

interface TasksScreenProps  {}

const TasksScreen: FC<TasksScreenProps> = (props) => {
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <Task />
            <Task />
            {/* <EmptyState image={require('../../../assets/tasks.png')} title='No Tasks Yet' description='Tap + to create' /> */}
            <RoundButton buttonprops={{
            title: "+",
            }} />
        </SafeAreaView>
    </ImageBackground>
)
}

export default TasksScreen
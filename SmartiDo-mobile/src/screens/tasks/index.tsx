import React, { FC, useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'
import EmptyState from '../../components/EmptyState'
import RoundButton from '../../components/RoundButton'
import Task from '../../components/Task'
import axios from 'axios'
import { numbers } from '../../constants/constants'
import * as SecureStore from 'expo-secure-store'

interface TasksScreenProps  {}

const TasksScreen: FC<TasksScreenProps> = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        
        const fetchTodos  = async () => {
            const token = await SecureStore.getItemAsync('token');
            axios.get("http://"+ numbers.server +"/api/v0.0.1/get_todos", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then(response => {
                    setTodos(response.data.todos)
                })
            }
            fetchTodos();
      }, []);
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
        {todos.map((todo) => (
          <Task key={todo.id} text={todo.to_do} />
        ))}
            {/* <EmptyState image={require('../../../assets/tasks.png')} title='No Tasks Yet' description='Tap + to create' /> */}
            <RoundButton buttonprops={{
            title: "+",
            }} />
        </SafeAreaView>
    </ImageBackground>
)
}

export default TasksScreen
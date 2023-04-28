import React, { FC, useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native'
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

      const renderTasks = () => {
        if (todos.length === 0) {
          return (
            <EmptyState
              image={require('../../../assets/tasks.png')}
              title="No Tasks Yet"
              description="Tap + to create"
            />
          );
        } else {
          return (
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
              {todos.map((todo) => (
                <Task key={todo.id} text={todo.to_do} />
              ))}
            </ScrollView>
          );
        }
      };
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            {renderTasks()}
            <RoundButton buttonprops={{
            title: "+",
            }} />
        </SafeAreaView>
    </ImageBackground>
)
}

export default TasksScreen
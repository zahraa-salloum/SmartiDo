import React, { FC, useEffect, useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'
import EmptyState from '../../components/EmptyState'
import RoundButton from '../../components/RoundButton'
import Task from '../../components/Task'
import axios from 'axios'
import { numbers } from '../../constants/constants'
import * as SecureStore from 'expo-secure-store'
import DialogInput from 'react-native-dialog-input'

interface TasksScreenProps  {}

const TasksScreen: FC<TasksScreenProps> = (props) => {
    const [todos, setTodos] = useState([]);
    const [visible, setVisible] = React.useState(false);

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

    const handleDone = async (todo: { id: any }) => {
        const token = await SecureStore.getItemAsync('token');
      
        const data = {
          id: todo.id,
          done: 1,
        };
      
        axios.post('http://' + numbers.server + '/api/v0.0.1/update_todo', data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id));
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const handleAddTask = async (task: string) => {
        const token = await SecureStore.getItemAsync('token');
        
        const data = {
          to_do: task,
        };
        
        axios.post('http://' + numbers.server + '/api/v0.0.1/add_todo', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          setTodos(prevTodos => [...prevTodos, response.data.todo]);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const handleAddTaskPress = () => {
        setVisible(true);
    };
    
    const handleSubmitTask = (task: string) => {
        handleAddTask(task);
        setVisible(false);
    };
    
    const handleCloseDialog = () => {
        setVisible(false);
    };


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
                        <Task key={todo.id} text={todo.to_do} onPress={() => handleDone(todo)} />
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
                onPress: handleAddTaskPress,
                }} />
                <DialogInput
                isDialogVisible={visible}
                title={'Task'}
                message={'Enter Task'}
                hintInput={'Enter Text'}
                submitInput={handleSubmitTask}
                closeDialog={handleCloseDialog}
                dialogStyle={styles.dialogInput}
                submitText={'add task'}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default TasksScreen
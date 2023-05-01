import React, { FC, useEffect, useState } from 'react';
import { Button, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import TimesRoutines from '../../components/TimesRoutines';
import TimesExams from '../../components/TimesExams';
import SeventyWidthButton from '../../components/SeventyWidthButton';
import * as SecureStore from 'expo-secure-store';
import { numbers } from '../../constants/constants';
import axios from 'axios';
import LogButton from '../../components/LogButton';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {
    const [selectedTimeSleep, setSelectedTimeSleep] = useState('00:00');
    const [selectedTimeWakeUp, setSelectedTimeWakeUp] = useState('00:00');
    const [selectedTimeBreakfast, setSelectedTimeBreakfast] = useState('00:00');
    const [selectedTimeLunch, setSelectedTimeLunch] = useState('00:00');
    const [selectedTimeDinner, setSelectedTimeDinner] = useState('00:00');
    const [selectedTimeExam, setSelectedTimeExam] = useState('00:00');
    const [selectedDateExam, setSelectedDateExam] = useState('00:00');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState('');
    const [exams, setExams] = useState([]);


    const handleGenerate = async () => {
        const token = await SecureStore.getItemAsync('token');
        console.log(exams)
        const data = {
            sleep: selectedTimeSleep,
            wake_up: selectedTimeWakeUp,
            breakfast: selectedTimeBreakfast,
            lunch: selectedTimeLunch,
            dinner: selectedTimeDinner,
            exams: exams,
        };
        
        axios.post('http://' + numbers.server + '/api/v0.0.1/generate_plan', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
            if(response.data.status == "success"){
                console.log('ok')
            }
        })
        .catch(error => {
          console.log(error);
        });
    }

    const handleTimeSleepChange = (time) => {
        setSelectedTimeSleep(time);
    }

    const handleTimeWakeUpChange = (time) => {
        setSelectedTimeWakeUp(time);
    }

    const handleTimeBreakfastChange = (time) => {
        setSelectedTimeBreakfast(time);
    }

    const handleTimeLunchChange = (time) => {
        setSelectedTimeLunch(time);
    }

    const handleTimeDinnerChange = (time) => {
        setSelectedTimeDinner(time);
    }
    
    const handleTimeExamChange = (time) => {
        setSelectedTimeExam(time);
    }
    
    const handleDateExamChange = (time) => {
        setSelectedDateExam(time);
    }
    
    const handleCategoryChange = (value: string) => {
        setCategory(value);
    }
    
    const handletitleChange = (value: string) => {
        setTitle(value);
    }
    
    const handlepageChange = (value: string) => {
        setPages(value);
    }
    

    const [timeExamsComponents, setTimeExamsComponents] = useState([<TimesExams key={0} onChangeText={handletitleChange}  onValueChange={handleCategoryChange} onChangeTextPages={handlepageChange} onTimeChange={handleTimeExamChange } onDateChange={handleDateExamChange } />]);
    
    
    const handleAddTimeExam = () => {
        setExams(prevExams => [
            ...prevExams,
            {
              title: title,
              category: category,
              hours_of_study: 0,
              day: selectedDateExam,
              hour: selectedTimeExam,
            }
          ]);

        const nextKey = timeExamsComponents.length;
        setTimeExamsComponents([...timeExamsComponents, <TimesExams onChangeText={handletitleChange}  onValueChange={handleCategoryChange} onChangeTextPages={handlepageChange} onTimeChange={handleTimeExamChange } onDateChange={handleDateExamChange } key={nextKey} />]);
    }
      

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <TimesRoutines label='Sleep Time:' onTimeChange={handleTimeSleepChange} />
                    <TimesRoutines label='Wake Up Time:' onTimeChange={handleTimeWakeUpChange} />
                    <TimesRoutines label='Breakfast Time:' onTimeChange={handleTimeBreakfastChange} />
                    <TimesRoutines label='Lunch Time:' onTimeChange={handleTimeLunchChange} />
                    <TimesRoutines label='Dinner Time:' onTimeChange={handleTimeDinnerChange} />
                    {timeExamsComponents}
                    <LogButton buttonprops={{
                        title: "Log Exam",
                        onPress: handleAddTimeExam,
                    }} />
                    <SeventyWidthButton buttonprops={{
                    title: "Generate Plan",
                    onPress: handleGenerate,
                    }} />
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default TimesScreen
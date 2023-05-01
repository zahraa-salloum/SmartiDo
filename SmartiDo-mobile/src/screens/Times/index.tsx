import React, { FC, useEffect, useState } from 'react';
import { Button, ImageBackground, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import styles from './styles';
import TimesRoutines from '../../components/TimesRoutines';
import TimesExams from '../../components/TimesExams';
import SeventyWidthButton from '../../components/SeventyWidthButton';
import * as SecureStore from 'expo-secure-store';
import { numbers } from '../../constants/constants';
import axios from 'axios';
import LogButton from '../../components/LogButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useNavigation } from '@react-navigation/native';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {
    const [selectedTimeSleep, setSelectedTimeSleep] = useState('00:00');
    const [selectedTimeWakeUp, setSelectedTimeWakeUp] = useState('00:00');
    const [selectedTimeBreakfast, setSelectedTimeBreakfast] = useState('00:00');
    const [selectedTimeLunch, setSelectedTimeLunch] = useState('00:00');
    const [selectedTimeDinner, setSelectedTimeDinner] = useState('00:00');
    const [selectedTimeExam, setSelectedTimeExam] = useState('00:00');
    const [selectedDateExam, setSelectedDateExam] = useState('0000-00-00');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState('');
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    const handleGenerate = async () => {
        const token = await SecureStore.getItemAsync('token');

        // console.log(exams)
        setLoading(true);
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
                navigation.navigate("Tabs");
                ToastAndroid.show("Plan Generated Successfully", ToastAndroid.SHORT);
                console.log('ok')
            }
        })
        .catch(error => {
            ToastAndroid.show("Something Went Wrong", ToastAndroid.SHORT);
            console.log(error);
        }).finally(() => {
            setLoading(false); 
        })
    }

    const handleHours = async () => {
        return new Promise((resolve, reject) => {
          let valueHours = 0;
          if (category == 'History' || category == 'Philosophy' || category == 'Civics') {
            valueHours = Math.ceil(Number(pages) / 4);
          } else if (category == 'Philosophy') {
            valueHours = Math.ceil(Number(pages) / 3);
          } else if (category == 'Math' || category == 'Physics') {
            valueHours = Math.ceil(Number(pages) / 10);
          } else if (category == 'Chemistry' || category == 'Biology') {
            valueHours = Math.ceil(Number(pages) / 8);
          } else if (category == 'English Literature' || category == 'French Literature' || category == 'Arabic Literature') {
            valueHours = Math.ceil(Number(pages) / 15);
          } else if (category == 'Religion') {
            valueHours = Math.ceil(Number(pages) / 5);
          }
          resolve(valueHours);
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
    
    
    const handleAddTimeExam = async () => {
        const hoursCalculated = await handleHours();
        
        setExams(prevExams => [
            ...prevExams,
            {
              title: title,
              category: category,
              hours_of_study: hoursCalculated,
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
                    {loading && <LoadingIndicator />}
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
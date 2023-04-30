import React, { FC, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Plan from '../../components/Plan';
import { Calendar } from 'react-native-calendars';
import { colors, numbers } from '../../constants/constants';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

interface CalendarScreenProps  {}

const CalendarScreen: FC<CalendarScreenProps> = (props) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [plan, setPlan] = useState([]);

    const fetchPlan  = async () => {
        const token = await SecureStore.getItemAsync('token');

        const data = {
            day: selectedDate,
        };
        axios.post("http://"+ numbers.server +"/api/v0.0.1/get_plan", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setPlan(response.data.plan);
        })
    }

    useEffect(() => {
        if (selectedDate) {
            fetchPlan();
        }
    }, [selectedDate]);
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <Calendar
                style={{
                    borderColor: 'gray',
                    width: 350,
                    height: 350,
                    marginBottom: 20,
                  }}
                markedDates={{
                    [selectedDate]: {
                      selected: true,
                      selectedColor: colors.purple,
                    },
                }}
                onDayPress={day => {
                setSelectedDate(day.dateString);
                fetchPlan();
                }}
                />
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    {plan.map((item) => (
                        <Plan hour={item.hour} plan={item.task} key={item.id} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default CalendarScreen
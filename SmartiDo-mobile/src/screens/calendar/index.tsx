import React, { FC, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Plan from '../../components/Plan';
import { Calendar } from 'react-native-calendars';
import { colors } from '../../constants/constants';

interface CalendarScreenProps  {}

const CalendarScreen: FC<CalendarScreenProps> = (props) => {
    const [selectedDate, setSelectedDate] = useState('');
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
                console.log('selected day', day.dateString);
                setSelectedDate(day.dateString);
                }}
                />
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <Plan hour='12:00' plan='study math'/>
                    <Plan hour='12:00' plan='study math'/>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default CalendarScreen
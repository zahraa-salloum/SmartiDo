import React, { FC, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import TimesRoutines from '../../components/TimesRoutines';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {
    const [selectedTimeSleep, setSelectedTimeSleep] = useState('00:00');
    const [selectedTimeWakeUp, setSelectedTimeWakeUp] = useState('00:00');
    const [selectedTimeBreakfast, setSelectedTimeBreakfast] = useState('00:00');
    const [selectedTimeLunch, setSelectedTimeLunch] = useState('00:00');
    const [selectedTimeDinner, setSelectedTimeDinner] = useState('00:00');

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


    

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <TimesRoutines label='Sleep Time:' onTimeChange={handleTimeSleepChange} />
                    <TimesRoutines label='Wake Up Time:' onTimeChange={handleTimeWakeUpChange} />
                    <TimesRoutines label='Breakfast Time:' onTimeChange={handleTimeBreakfastChange} />
                    <TimesRoutines label='Lunch Time:' onTimeChange={handleTimeLunchChange} />
                    <TimesRoutines label='Dinner Time:' onTimeChange={handleTimeDinnerChange} />
                    
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default TimesScreen
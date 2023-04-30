import React, { FC, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import TimesRoutines from '../../components/TimesRoutines';
import TimesExams from '../../components/TimesExams';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {
    const [selectedTimeSleep, setSelectedTimeSleep] = useState('00:00');

    const handleTimeSleepChange = (time) => {
        setSelectedTimeSleep(time);
    }
    


    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <TimesRoutines label='Sleep Time:' onTimeChange={handleTimeSleepChange} />
                    <TimesRoutines label='Wake Up Time:' />
                    <TimesRoutines label='Breakfast Time:' />
                    <TimesRoutines label='Lunch Time:' />
                    <TimesRoutines label='Dinner Time:' />
                    <TimesExams onChangeText={undefined} categoryPickerValue={''} onValueChange={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } onChangeTextPages={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } />
                    <button onClick={}></button>
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default TimesScreen
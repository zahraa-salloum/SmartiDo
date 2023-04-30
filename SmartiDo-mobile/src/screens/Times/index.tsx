import React, { FC, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import TimesRoutines from '../../components/TimesRoutines';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <TimesRoutines label='Sleep Time:' />
                    <TimesRoutines label='Wake Up Time:' />
                    <TimesRoutines label='Breakfast Time:' />
                    <TimesRoutines label='Lunch Time:' />
                    <TimesRoutines label='Dinner Time:' />
                </ScrollView>

            </SafeAreaView>
        </ImageBackground>
    )
}

export default TimesScreen
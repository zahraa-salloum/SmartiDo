import React, { FC, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import TimesRoutines from '../../components/TimesRoutines';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <TimesRoutines label='Breakfast'/>
                <TimesRoutines label='Lunch'/>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default TimesScreen
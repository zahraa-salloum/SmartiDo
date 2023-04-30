import React, { FC, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';

interface TimesScreenProps  {}

const TimesScreen: FC<TimesScreenProps> = (props) => {

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default TimesScreen
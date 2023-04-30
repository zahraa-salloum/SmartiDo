import React, { FC } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import Plan from '../../components/Plan';

interface CalendarScreenProps  {}

const CalendarScreen: FC<CalendarScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <Plan hour='12:00' plan='study math'/>
                <Plan hour='15:00' plan='sv vwv er r hrhrher h rh  hhrh hth h hthr rh erher  hehe rhhh erhrher rheheh5 h555herhjhr'/>
                <Plan hour='12:00' plan='study math'/>
                <Plan hour='12:00' plan='study math'/>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default CalendarScreen
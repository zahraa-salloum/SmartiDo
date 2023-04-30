import React, { FC, useState } from 'react';
import styles from './styles';
import { View, Text,ButtonProps, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


interface TimesRoutinesProps  {
    label: string;
}

const TimesRoutines: FC<TimesRoutinesProps> = (props) => {
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const options = {
        timeZone: 'Asia/Beirut',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }


    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime);
    }
    
    const handleShowTimePicker = () => {
        setShowTimePicker(true);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {props.label} </Text>
            <TouchableOpacity  onPress= {handleShowTimePicker} style={styles.button}>
                <Text style={styles.textbtn}> {'Choose hour'} </Text>
            </TouchableOpacity>
            {showTimePicker && (
            <DateTimePicker
            value={time}
            mode="time"
            is24Hour = {true}
            display="default"
            onChange={handleTimeChange}
            />
            )}
            <Text style={styles.text}>{time.toLocaleString('en-US', options).substring(0,5)}</Text>
        </View>
    )
}

export default TimesRoutines
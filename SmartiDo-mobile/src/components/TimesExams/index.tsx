import React, { FC, useState } from 'react';
import styles from './styles';
import { View, Text,ButtonProps, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LabelledText from '../LabelledText';
import CategoryPicker from '../CategoryPicker';
import TextButton from '../TextButton';


interface TimesExamsProps  {
    onChangeText: any;
    categoryPickerValue: string;
    onValueChange: (value: string) => void;
    onChangeTextPages: (value: string) => void;
}

const TimesExams: FC<TimesExamsProps> = (props) => {
    const [dateExam, setDateExam] = useState('0000-00-00');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
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

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
        setDateExam(currentDate.toISOString().substring(0, 10));
    }

    const handleShowDatePicker = () => {
        setShowDatePicker(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{'Exam Info:'}</Text>
            
            <LabelledText label={'Title of Exam'} placeholder={'My Math Test'} onChangeText={props.onChangeText} />
            
            <CategoryPicker label={'Select Category'} value={props.categoryPickerValue} onValueChange={props.onValueChange}/>
            
            <LabelledText keyboardType='numeric' label={'Pages Count'} placeholder={'50'} onChangeText={props.onChangeTextPages}  />
            
            <TextButton buttonprops={{
                title: "Date of Exam",
                onPress: handleShowDatePicker,
            }}/>
            {showDatePicker && (
            <DateTimePicker
                value={date}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
            />
            )}
            <Text>{dateExam}</Text>

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

export default TimesExams
import React, { FC, useEffect, useState} from 'react';
import styles from './styles';
import { Button, ImageBackground, SafeAreaView, Text, ToastAndroid } from 'react-native';
import SeventyWidthButton from '../../components/SeventyWidthButton';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import TextButton from '../../components/TextButton';
import ImageProfile from '../../components/ImageProfile';
import axios from 'axios';
import { numbers } from '../../constants/constants';
import * as SecureStore from 'expo-secure-store';
import Bio from '../../components/Bio';
import DateTimePicker from '@react-native-community/datetimepicker';
import GenderPicker from '../../components/GenderPick';
import LoadingIndicator from '../../components/LoadingIndicator';

interface ProfileScreenProps  {}

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
    const [base64String, setBase64String] = useState('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');
    const [bio, setBio] = useState("");
    const [date, setDate] = useState(new Date());
    const [dob, setDob] = useState('0000-00-00');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] = useState('');
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProfile = async () => {
            const token = await SecureStore.getItemAsync("token");
            const response = await axios.get("http://" + numbers.server + "/api/v0.0.1/get_profile",{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if(response.data.status == "success" && response.data.profile){
                setProfile(response.data.profile);
                setBase64String(response.data.profile.picture)
                setBio(response.data.profile.bio)
                setGender(response.data.profile.gender)
                setDob(response.data.profile.dob)
            }
        }
        getProfile();
    }, []);

    const handleGenderChange = (value: string) => {
        setGender(value);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0,
        });
      
        if (!result.canceled){
            let image = await FileSystem.readAsStringAsync(result.assets[0].uri, {encoding: FileSystem.EncodingType.Base64,});
            setBase64String(image);
        }
    }

    const handleBio=(text: string)=>{
        setBio(text);
    }

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
        setDob(currentDate.toISOString().substring(0, 10));
    }
    
    const handleShowDatePicker = () => {
        setShowDatePicker(true);
    }

    const handleSave = async () => {
        const token = await SecureStore.getItemAsync('token');
        setLoading(true);

        const data = {
            picture: base64String,
            bio: bio,
            gender: gender,
            dob: dob,
        };
        
        axios.post('http://' + numbers.server + '/api/v0.0.1/add_profile', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
            ToastAndroid.show("Saved", ToastAndroid.SHORT);
        })
        .catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false); 
        })
    }

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ImageProfile image={{uri: `data:image/png;base64,${base64String}`}} />
                <TextButton buttonprops={{
                title: "Upload Image",
                onPress: pickImage,
                }}/>

                <Bio label={'Bio'} value={bio} placeholder={'I am eager to study with SmartiDo'} onChangeText={handleBio} />
                
                <TextButton buttonprops={{
                title: "Date of Birth",
                onPress: handleShowDatePicker,
                }}/>

                {showDatePicker && (
                <DateTimePicker
                value={date}
                mode="date"
                display="spinner"
                maximumDate={new Date()}
                onChange={handleDateChange}
                />
                )}
                <Text>{dob}</Text>

                <GenderPicker label="Gender" value={gender} onValueChange={handleGenderChange} />
                {loading && <LoadingIndicator />}
                <SeventyWidthButton buttonprops={{
                title: "Save",
                onPress: handleSave,
                }} />
                
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ProfileScreen
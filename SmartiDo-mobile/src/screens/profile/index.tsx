import React, { FC, useEffect, useState} from 'react';
import styles from './styles';
import { Button, ImageBackground, SafeAreaView, ToastAndroid } from 'react-native';
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

interface ProfileScreenProps  {}

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
    const [base64String, setBase64String] = useState('');
    const [bio, setBio] = useState("");
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] = useState('');
    const [profile, setProfile] = useState(null);

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
    }
    
    const handleShowDatePicker = () => {
        setShowDatePicker(true);
    }

    const handleSave = async () => {
        const token = await SecureStore.getItemAsync('token');
        
        const data = {
            picture: base64String,
            bio: bio,
            gender: gender,
            dob: date.toISOString().substring(0, 10),
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
                onChange={handleDateChange}
                />
                )}

                <GenderPicker label="Gender" value={gender} onValueChange={handleGenderChange} />
                
                <SeventyWidthButton buttonprops={{
                title: "Save",
                onPress: handleSave,
                }} />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ProfileScreen
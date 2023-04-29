import React, { FC, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Button, ImageBackground, SafeAreaView, ToastAndroid } from 'react-native'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import TextButton from '../../components/TextButton'
import ImageProfile from '../../components/ImageProfile'
import axios from 'axios'
import { numbers } from '../../constants/constants'
import * as SecureStore from 'expo-secure-store'
import Bio from '../../components/Bio'

interface ProfileScreenProps  {}

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
    const [base64String, setBase64String] = useState('');
    const [bio, setBio] = useState("");

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
      };

    const handleBio=(text: React.SetStateAction<string>)=>{
        setBio(text)
    }

    const handleSave = async () => {
        const token = await SecureStore.getItemAsync('token');
        // console.log(base64String)
        const data = {
            picture: base64String,
            bio: bio,
            gender: "female",
            dob: "1996-10-30",
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
        });
    };

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ImageProfile image={{uri: `data:image/png;base64,${base64String}`}} />
                <TextButton buttonprops={{
                title: "Upload Image",
                onPress: pickImage,
                }}/>
                <Bio label={'Bio'} placeholder={'I am eager to study with SmartiDo'} onChangeText={handleBio} />
                <SeventyWidthButton buttonprops={{
                title: "Save",
                onPress: handleSave,
                }} />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ProfileScreen
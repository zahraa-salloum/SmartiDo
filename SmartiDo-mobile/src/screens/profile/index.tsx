import React, { FC, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Button, ImageBackground, SafeAreaView } from 'react-native'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import TextButton from '../../components/TextButton'
import ImageProfile from '../../components/ImageProfile'

interface ProfileScreenProps  {}

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
    const [base64String, setBase64String] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        if (!result.canceled){
            let image = await FileSystem.readAsStringAsync(result.assets[0].uri, {encoding: FileSystem.EncodingType.Base64,});
            setBase64String(image);
        }
      };

    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <ImageProfile image={{uri: `data:image/png;base64,${base64String}`}} />
                <TextButton buttonprops={{
                title: "Upload Image",
                onPress: pickImage,
                }}/>
                <SeventyWidthButton buttonprops={{
                title: "Save",
                
                }} />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ProfileScreen
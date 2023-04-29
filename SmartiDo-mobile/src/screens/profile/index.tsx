import React, { FC} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { ImageBackground, SafeAreaView } from 'react-native'
import Profile from '../../components/Profile'
import SeventyWidthButton from '../../components/SeventyWidthButton'


interface ProfileScreenProps  {}

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <Profile />
                <SeventyWidthButton buttonprops={{
                title: "Save",
                
                }} />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ProfileScreen
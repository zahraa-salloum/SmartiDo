import React, { FC} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { ImageBackground } from 'react-native'


interface ProfileScreenProps  {}

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/signup.png')} style={styles.containerBackground}>
        </ImageBackground>
    )
}

export default ProfileScreen
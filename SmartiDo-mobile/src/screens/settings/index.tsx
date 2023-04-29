import React, { FC } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'
import SettingsButton from '../../components/SettingsButton'

interface SettingsScreenProps  {}

const SettingsScreen: FC<SettingsScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <SettingsButton  buttonprops={{
                title: "Profile",
                
                }}/>
                <SettingsButton  buttonprops={{
                title: "Delete Plan",
                
                }}/>
                <SettingsButton  buttonprops={{
                title: "Logout",
                
                }}/>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SettingsScreen
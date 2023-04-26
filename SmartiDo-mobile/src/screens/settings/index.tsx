import React, { FC } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'

interface SettingsScreenProps  {}

const SettingsScreen: FC<SettingsScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SettingsScreen
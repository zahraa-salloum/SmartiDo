import React, { FC } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'

interface LeaderboardScreenProps  {}

const LeaderboardScreen: FC<LeaderboardScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default LeaderboardScreen
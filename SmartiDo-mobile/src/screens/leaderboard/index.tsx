import React, { FC } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'
import Record from '../../components/Record'

interface LeaderboardScreenProps  {}

const LeaderboardScreen: FC<LeaderboardScreenProps> = (props) => {
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <Record image={require('../../../assets/student.png')} name='Ali Ali' score={25}/>
                <Record image={require('../../../assets/student.png')} name='Mohammad Mohammad' score={11150}/>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default LeaderboardScreen
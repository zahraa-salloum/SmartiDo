import React, { FC } from 'react'
import styles from './styles'
import { ImageBackground, SafeAreaView } from 'react-native'

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    </ImageBackground>
)
}

export default PlansScreen
import React, { FC } from 'react'
import styles from './styles'
import { ImageBackground } from 'react-native'

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
    </ImageBackground>
)
}

export default PlansScreen
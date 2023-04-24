import React, { FC } from 'react'
import styles from './styles'
import { ImageBackground, SafeAreaView } from 'react-native'
import EmptyState from '../../components/EmptyState'
import RoundButton from '../../components/RoundButton'

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <EmptyState image={require('../../../assets/plans.png')} title='No Plan Yet' description='Tap + to create' />
            <RoundButton buttonprops={{
            title: "+",
            }} />
        </SafeAreaView>
    </ImageBackground>
)
}

export default PlansScreen
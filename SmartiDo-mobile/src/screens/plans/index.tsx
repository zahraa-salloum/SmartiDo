import React, { FC } from 'react';
import styles from './styles';
import { ImageBackground, SafeAreaView } from 'react-native';
import EmptyState from '../../components/EmptyState';
import RoundButton from '../../components/RoundButton';
import { useNavigation } from '@react-navigation/native';

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
    const navigation = useNavigation();
return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <EmptyState image={require('../../../assets/plans.png')} title='No Plan Yet' description='Tap + to create' />
            <RoundButton buttonprops={{
            title: "+",
            onPress: () => navigation.navigate("Times"),
            }} />
        </SafeAreaView>
    </ImageBackground>
)
}

export default PlansScreen
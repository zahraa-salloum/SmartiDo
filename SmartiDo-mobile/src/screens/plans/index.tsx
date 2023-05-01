import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import { ImageBackground, SafeAreaView, ScrollView, Text } from 'react-native';
import EmptyState from '../../components/EmptyState';
import RoundButton from '../../components/RoundButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { numbers } from '../../constants/constants';
import * as SecureStore from 'expo-secure-store';
import Plan from '../../components/Plan';

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
    const [plan, setPlan] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();

    const today = new Date();
    useEffect(() => {
        const fetchPlan  = async () => {
            const token = await SecureStore.getItemAsync('token');
            
            const data = {
                day: today.toISOString().substring(0, 10),
            };
            axios.post("http://"+ numbers.server +"/api/v0.0.1/get_plan", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setPlan(response.data.plan);
            })
        }   
        fetchPlan();
    }, []);

return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>{today.toISOString().substring(0, 10)}</Text>
                {plan.map((item) => (
                    <Plan hour={item.hour} plan={item.task} key={item.id} />
                ))}
            </ScrollView>
            {/* <EmptyState image={require('../../../assets/plans.png')} title='No Plan Yet' description='Tap + to create' />
            <RoundButton buttonprops={{
            title: "+",
            onPress: () => navigation.navigate("Times"),
            }} /> */}
        </SafeAreaView>
    </ImageBackground>
)
}

export default PlansScreen
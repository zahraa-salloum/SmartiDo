import React, { FC, useState } from 'react';
import styles from './styles';
import { ImageBackground, SafeAreaView, ScrollView, Text } from 'react-native';
import EmptyState from '../../components/EmptyState';
import RoundButton from '../../components/RoundButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { numbers } from '../../constants/constants';
import * as SecureStore from 'expo-secure-store';
import Plan from '../../components/Plan';

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
    const [plan, setPlan] = useState([]);
    const navigation = useNavigation();

    const today = new Date();
    
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
        

    useFocusEffect(
        React.useCallback(() => {
          fetchPlan();
        }, [])
      );

    const renderPlan = () => {
        if (plan.length === 0) {
          return (
            <>
                <EmptyState image={require('../../../assets/plans.png')} title='No Plan Yet' description='Tap + to create' />
                <RoundButton buttonprops={{
                title: "+",
                onPress: () => navigation.navigate("Times"),
                }} />
            </>
          );
        } else {
            return (
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.title}>{today.toISOString().substring(0, 10)}</Text>
                    {plan.map((item) => (
                        <Plan hour={item.hour} plan={item.task} key={item.id} />
                    ))}
                </ScrollView>
            );
        }
    }

return (
    <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            {renderPlan()}
        </SafeAreaView>
    </ImageBackground>
)
}

export default PlansScreen
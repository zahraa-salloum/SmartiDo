import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import { ImageBackground, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native';
import EmptyState from '../../components/EmptyState';
import RoundButton from '../../components/RoundButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { numbers } from '../../constants/constants';
import * as SecureStore from 'expo-secure-store';
import Plan from '../../components/Plan';
import Dialog from "react-native-dialog";

interface PlansScreenProps  {}

const PlansScreen: FC<PlansScreenProps> = (props) => {
    const [plan, setPlan] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [hasStudyPlan, setHasStudyPlan] = useState(false);
    const [pressed, setPressed] = useState(false);
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
            const hasStudyPlan = response.data.plan.some(item => item.task.toLowerCase().includes('study'));
            setHasStudyPlan(hasStudyPlan);
        })
    } 
        
    useFocusEffect(
        React.useCallback(() => {
            fetchPlan();
        }, [])
    );
        
    
    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        
        if (hour === 12 && hasStudyPlan && !pressed) {
            setShowAlert(true);
        }
    }, [plan]);
        

    const handleYesPress = async () => {
        
        const token = await SecureStore.getItemAsync('token');
            
        axios.post("http://"+ numbers.server +"/api/v0.0.1/study_done",{}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if(response.data.status == "success"){
                ToastAndroid.show("Cool..Keep it up", ToastAndroid.SHORT);
                setShowAlert(false);
                setPressed(true)
            }
        }).catch(error => {
            console.log(error);
        })
        
    }
    
    const handleNoPress = async () => {
        
        const token = await SecureStore.getItemAsync('token');
            
        axios.post("http://"+ numbers.server +"/api/v0.0.1/regenerate_plan",{}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if(response.data.status == "success"){
                ToastAndroid.show("Plan regenerated", ToastAndroid.SHORT);
                setShowAlert(false);
                setPressed(true)
            }
        }).catch(error => {
            console.log(error);
        })
    
    }

    

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
            {showAlert && (
            <Dialog.Container visible={showAlert} contentStyle={styles.dialog}>
            <Dialog.Title>Follow Up</Dialog.Title>
            <Dialog.Description>
                Did you study today as planned ?
            </Dialog.Description>
            <Dialog.Button label="No" onPress={handleNoPress} />
            <Dialog.Button label="Yes, I did !" onPress={handleYesPress} />
            </Dialog.Container>
            )}
        </SafeAreaView>
    </ImageBackground>
)
}

export default PlansScreen
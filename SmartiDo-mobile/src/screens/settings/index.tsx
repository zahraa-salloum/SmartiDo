import React, { FC, useState } from 'react'
import { ImageBackground, SafeAreaView, ToastAndroid } from 'react-native'
import styles from './styles'
import SettingsButton from '../../components/SettingsButton'
import Dialog from "react-native-dialog";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice'
import axios from 'axios';
import { numbers } from '../../constants/constants'
import * as SecureStore from 'expo-secure-store'

interface SettingsScreenProps  {}

const SettingsScreen: FC<SettingsScreenProps> = (props) => {
    const [visiblePlan, setVisiblePlan] = useState(false);
    const [visibleAccount, setVisibleAccount] = useState(false);
    const [visibleLogout, setVisibleLogout] = useState(false);
    const dispatch = useDispatch()

    const showDialogAccount = () => {
        setVisibleAccount(true);
    };

    const showDialogLogout = () => {
        setVisibleLogout(true);
    };

    const showDialogPlan = () => {
        setVisiblePlan(true);
    };
    
    const handleCancelAccount = () => {
        setVisibleAccount(false);
    };

    const handleCancelLogout = () => {
        setVisibleLogout(false);
    };

    const handleCancelPlan = () => {
        setVisiblePlan(false);
    };
    
    const handleDeletePlan = async () => {
        const token = await SecureStore.getItemAsync('token');
        axios.delete("http://"+ numbers.server +"/api/v0.0.1/delete_plan", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if(response.data.status == "success"){
                ToastAndroid.show("Plan deleted", ToastAndroid.SHORT);
            }
        })
        setVisiblePlan(false);
    };

    const handleLogout = () => {
        dispatch(logout());

        setVisibleLogout(false);
    };

    const handleDeleteAccount = () => {
        
        setVisibleAccount(false);
    };
    
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <SettingsButton  buttonprops={{
                title: "Profile",
                
                }}/>

                <SettingsButton  buttonprops={{
                title: "Delete Plan",
                onPress: showDialogPlan,
                }}/>
                <Dialog.Container visible={visiblePlan}>
                    <Dialog.Title>Delete Plan</Dialog.Title>
                    <Dialog.Description>
                        Do you want to delete this plan? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancelPlan} />
                    <Dialog.Button label="Delete" onPress={handleDeletePlan} />
                </Dialog.Container>

                <SettingsButton  buttonprops={{
                title: "Logout",
                onPress: showDialogLogout,
                }}/>
                <Dialog.Container visible={visibleLogout}>
                    <Dialog.Title>Logout</Dialog.Title>
                    <Dialog.Description>
                        Are you sure you want to logout?
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancelLogout} />
                    <Dialog.Button label="I am Sure" onPress={handleLogout} />
                </Dialog.Container>

                <SettingsButton  buttonprops={{
                title: "Delete Account",
                onPress: showDialogAccount,
                }}/>
                <Dialog.Container visible={visibleAccount}>
                    <Dialog.Title>Delete Account</Dialog.Title>
                    <Dialog.Description>
                        Do you want to delete this account? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancelAccount} />
                    <Dialog.Button label="Delete" onPress={handleDeleteAccount} />
                </Dialog.Container>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SettingsScreen
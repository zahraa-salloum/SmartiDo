import React, { FC, useState } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'
import styles from './styles'
import SettingsButton from '../../components/SettingsButton'
import Dialog from "react-native-dialog";

interface SettingsScreenProps  {}

const SettingsScreen: FC<SettingsScreenProps> = (props) => {
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
      };
    
    const handleCancel = () => {
        setVisible(false);
    };
    
    const handleDelete = () => {
        
        setVisible(false);
    };
    
    return (
        <ImageBackground source={require('../../../assets/empty.png')} style={styles.containerBackground}>
            <SafeAreaView style={styles.container}>
                <SettingsButton  buttonprops={{
                title: "Profile",
                
                }}/>
                <SettingsButton  buttonprops={{
                title: "Delete Plan",
                onPress: showDialog,
                }}/>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Plan Delete</Dialog.Title>
                    <Dialog.Description>
                        Do you want to delete this plan? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancel} />
                    <Dialog.Button label="Delete" onPress={handleDelete} />
                </Dialog.Container>
                <SettingsButton  buttonprops={{
                title: "Logout",
                
                }}/>
                <SettingsButton  buttonprops={{
                title: "Delete Account",
                
                }}/>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SettingsScreen
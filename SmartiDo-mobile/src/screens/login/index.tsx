import { ImageBackground, SafeAreaView, Text, ToastAndroid } from 'react-native'
import React, { FC, useState, useEffect } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import { login } from '../../redux/slices/authSlice'
import LabelledText from '../../components/LabelledText'
import TextButton from '../../components/TextButton'
import axios from "axios"
import * as SecureStore from 'expo-secure-store';
import { numbers } from '../../constants/constants'


interface LoginScreenProps  {}


const LoginScreen: FC<LoginScreenProps> = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toastMessage, setToastMessage] = useState("");

    const handleEmail=(text: React.SetStateAction<string>)=>{
        setEmail(text)
    }
    const handlePassword=(text: React.SetStateAction<string>)=>{
        setPassword(text)
    }

    const handleSubmit=()=>{
        if (email==="" || password===""){
            setToastMessage("All input are required");

        }else{

        let data = {
        "email": email,
        "password": password
        };

        axios.post("http://"+numbers.server+"/api/v0.0.1/auth/login",data).then(async (res) => {
            if(res.data.status == "success"){
                await SecureStore.setItemAsync('token', res.data.authorisation.token);
                dispatch(login());
            }
        }
        ).catch((err) => {
            setToastMessage("Invalid credentials");
            console.log(err);
        })

    }
}
    useEffect(() => {
        if (toastMessage !== "") {
            ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
            setToastMessage("");
        }
    }, [toastMessage]);

return (
    <ImageBackground source={require('../../../assets/login.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>LOG IN</Text>
            <LabelledText label='Email' placeholder='john@gmail.com' onChangeText={handleEmail}/>
            <LabelledText label='Password' placeholder='******' onChangeText={handlePassword}/>
            <SeventyWidthButton buttonprops={{
            title: "LOG IN",
            onPress: handleSubmit,
            }} />
            <TextButton buttonprops={{
            title: "New User?",
            onPress: () => navigation.navigate("Signup"),
            }}/>
        </SafeAreaView>
    </ImageBackground>

  )
}

export default LoginScreen
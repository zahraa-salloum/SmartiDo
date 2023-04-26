import React, { FC, useState, useEffect } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { ImageBackground, SafeAreaView, Text, ToastAndroid } from 'react-native'
import LabelledText from '../../components/LabelledText'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import TextButton from '../../components/TextButton'
import { login } from '../../redux/slices/authSlice'
import axios from "axios"
import * as SecureStore from 'expo-secure-store'
import { numbers } from '../../constants/constants'

interface SignupScreenProps  {}

const SignupScreen: FC<SignupScreenProps> = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toastMessage, setToastMessage] = useState("");

    const handleName=(text: React.SetStateAction<string>)=>{
        setName(text)
    }
    const handleEmail=(text: React.SetStateAction<string>)=>{
        setEmail(text)
    }
    const handlePassword=(text: React.SetStateAction<string>)=>{
        setPassword(text)
    }

    const validateEmail=(email: string) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const validatePassword=(password: string)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    }

    const handleSubmit=()=>{
        if (name==="" || email==="" || password===""){
            setToastMessage("All input are required");

        }else{
            if (validateEmail(email)){
                if(validatePassword(password)){
                    
                    let data = {
                        "name": name,
                        "email": email,
                        "password": password
                      };
    
                    axios.post("http://"+ numbers.server +"/api/v0.0.1/register",data).then(async (res) => {
                        if(res.data.status == "success"){
                            await SecureStore.setItemAsync('token', res.data.authorisation.token);
                            dispatch(login());
                        }
                        
                    }).catch((err) => {
                        console.log(err);
                    })
                }else{
                    setToastMessage("Password must contain 8 chracters, one capital letter, one special character, one number");
                }
            }else{
                setToastMessage("Invalid email format");
            }
        }
    }
    useEffect(() => {
        if (toastMessage !== "") {
            ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
            setToastMessage("");
        }
    }, [toastMessage]);

return (
    <ImageBackground source={require('../../../assets/signup.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>SIGN UP</Text>
            <LabelledText label='Name' placeholder='John Smith' onChangeText={handleName}/>
            <LabelledText label='Email' placeholder='john@gmail.com' onChangeText={handleEmail}/>
            <LabelledText label='Password' placeholder='******' onChangeText={handlePassword}/>
            <SeventyWidthButton buttonprops={{
            title: "SIGN UP",
            onPress: handleSubmit,
            
            }} />
            <TextButton buttonprops={{
            title: "Already a User?",
            onPress: () => navigation.navigate("Login"),
            }}/>
        </SafeAreaView>
    </ImageBackground>

)
}

export default SignupScreen
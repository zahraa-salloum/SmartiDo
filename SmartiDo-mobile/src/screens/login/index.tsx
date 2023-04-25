import { ImageBackground, SafeAreaView, Text } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import { login } from '../../redux/slices/authSlice'
import LabelledText from '../../components/LabelledText'
import TextButton from '../../components/TextButton'
import axios from "axios"


interface LoginScreenProps  {}


const LoginScreen: FC<LoginScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleEmail=(text)=>{
    setEmail(text)
}
const handlePassword=(text)=>{
   setPassword(text)
}

const handleSubmit=()=>{
    
      
    let data = {
        "email": email,
        "password": password
      };

axios.post("http://192.168.1.105:8000/api/v0.0.1/auth/login",data).then((res) => {
  console.log(res.data)
  if(res.data.status == "success"){

  dispatch(login());
}

}
).catch((err) => {
  console.log(err);
})

}

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
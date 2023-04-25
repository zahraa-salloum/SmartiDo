import { ImageBackground, SafeAreaView, Text } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import { login } from '../../redux/slices/authSlice'
import LabelledText from '../../components/LabelledText'
import TextButton from '../../components/TextButton'


interface LoginScreenProps  {}


const LoginScreen: FC<LoginScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
    <ImageBackground source={require('../../../assets/login.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>LOG IN</Text>
            <LabelledText label='Email' placeholder='john@gmail.com'/>
            <LabelledText label='Password' placeholder='******'/>
            <SeventyWidthButton buttonprops={{
            title: "LOG IN",
            onPress: () => {
                // api login
                // wait for a respponse
                // 200 => dispatch(login())
                dispatch(login())
              }
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
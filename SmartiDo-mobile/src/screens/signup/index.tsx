import React, { FC, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import LabelledText from '../../components/LabelledText'
import SeventyWidthButton from '../../components/SeventyWidthButton'
import TextButton from '../../components/TextButton'
import { login } from '../../redux/slices/authSlice'

interface SignupScreenProps  {}

const SignupScreen: FC<SignupScreenProps> = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

return (
    <ImageBackground source={require('../../../assets/signup.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>SIGN UP</Text>
            <LabelledText label='Name' placeholder='John Smith'/>
            <LabelledText label='Email' placeholder='john@gmail.com'/>
            <LabelledText label='Password' placeholder='******'/>
            <SeventyWidthButton buttonprops={{
            title: "SIGN UP",
            onPress: () => {
                // api login
                // wait for a respponse
                // 200 => dispatch(login())
                dispatch(login())
              }
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
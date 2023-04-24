import React, { FC } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import LabelledText from '../../components/Input'
import SeventyWidthButton from '../../components/Button'

interface SignupScreenProps  {}

const SignupScreen: FC<SignupScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

return (
    <ImageBackground source={require('../../../assets/signup.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <Text>SIGN UP</Text>
            <LabelledText label='Name' placeholder='John Smith'/>
            <LabelledText label='Email' placeholder='john@gmail.com'/>
            <LabelledText label='Password' placeholder='******'/>
            <SeventyWidthButton buttonprops={{
            title: "SIGN UP",
                }} />
        </SafeAreaView>
    </ImageBackground>

)
}

export default SignupScreen
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import SeventyWidthButton from '../../components/Button'
import { login } from '../../redux/slices/authSlice'
import LabelledText from '../../components/Input'


interface LoginScreenProps  {}


const LoginScreen: FC<LoginScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

return (
    <ImageBackground source={require('../../../assets/login.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
            <LabelledText label='Email' placeholder='john@gmail.com'/>
            <LabelledText label='Password' placeholder='******'/>
            <SeventyWidthButton buttonprops={{
            title: "LOG IN",
      }} />
        </SafeAreaView>
    </ImageBackground>

  )
}

export default LoginScreen
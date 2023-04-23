import { ImageBackground, SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'


interface LoginScreenProps  {}


const LoginScreen: FC<LoginScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

return (
    <ImageBackground source={require('../../../assets/login.png')} style={styles.container}>
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    </ImageBackground>

  )
}

export default LoginScreen
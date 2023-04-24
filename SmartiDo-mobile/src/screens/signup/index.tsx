import React, { FC } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { ImageBackground, SafeAreaView } from 'react-native'

interface SignupScreenProps  {}

const SignupScreen: FC<SignupScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

return (
    <ImageBackground source={require('../../../assets/signup.png')} style={styles.containerBackground}>
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    </ImageBackground>

)
}

export default SignupScreen
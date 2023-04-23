import { SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'


interface LoginScreenProps  {}


const LoginScreen: FC<LoginScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

return (
<SafeAreaView style={styles.container}>
</SafeAreaView>
  )
}

export default LoginScreen
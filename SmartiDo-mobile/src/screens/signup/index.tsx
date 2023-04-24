import React, { FC } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

interface SignupScreenProps  {}

const SignupScreen: FC<SignupScreenProps> = (props) => {
const navigation = useNavigation()
const dispatch = useDispatch()

return (
    <view>

    </view>
)
}

export default SignupScreen
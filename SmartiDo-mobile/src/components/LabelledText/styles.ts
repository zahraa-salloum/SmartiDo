import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    label:{
        color: colors.dark_purple, 
        padding: 10,
        marginBottom:-20,
        fontSize: 16,
        },

    input: {
        height: 50,
        width: 325,
        margin: 14,
        borderWidth: 1,
        borderColor: colors.dark_purple, 
        padding: 10,
        fontSize: 16,
        },
})
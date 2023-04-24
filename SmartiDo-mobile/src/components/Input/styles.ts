import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    label:{
        color: colors.dark_purple, 
        padding: 10,
        marginBottom:-20,
        },

    input: {
        height: 50,
        width: 320,
        margin: 14,
        borderWidth: 1,
        borderColor: colors.dark_purple, 
        padding: 10,
        },
})
import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    title:{
        color: colors.purple, 
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        },

    description: {
        color: colors.dark_purple,  
        padding: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        },
})
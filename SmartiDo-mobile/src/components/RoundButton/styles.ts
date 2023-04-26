import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    button:{
        backgroundColor: colors.dark_purple, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 20,  
        width: 80, 
        height: 80,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 15,
        
    },
})
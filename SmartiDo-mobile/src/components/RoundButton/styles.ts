import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    button:{
        backgroundColor: colors.dark_purple, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 20,  
        width: 90, 
        height: 90,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 15,
        
    },
})
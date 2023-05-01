import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    button:{
        backgroundColor: colors.dark_purple, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 20, 
        margin: 30,
        marginRight:50,
        marginLeft:50,
        width: "70%", 
        borderRadius: 5},

       text: {
        color: "white", 
        fontWeight: "900",
        fontSize: 16, 
        textTransform: "uppercase"}
})
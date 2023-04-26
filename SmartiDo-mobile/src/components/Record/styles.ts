import { StyleSheet } from 'react-native'
import { colors } from '../../constants/palette'

export default StyleSheet.create({
    container: {
        flex: 0.12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: "98%",
        borderColor: colors.dark_purple,
        borderWidth: 2,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: colors.light_purple,
        borderWidth: 1,
    },
    name:{
        color: colors.purple, 
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        },

    score: {
        color: colors.dark_purple,  
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        },
})
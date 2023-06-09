import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 0.12,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: "98%",
        borderColor: colors.dark_purple,
        borderWidth: 0.5,
        height:75,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: colors.light_purple,
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
    },
    name:{
        color: colors.purple, 
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        flex:1,
        flexWrap: 'wrap',
        },

    score: {
        color: colors.dark_purple,  
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        },
})
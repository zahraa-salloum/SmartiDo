import { StyleSheet } from 'react-native'
import { colors } from '../../constants/constants'


export default StyleSheet.create({
container: {
        flex: 0.16,
        alignItems: 'flex-start',
        justifyContent: "center",
        width: "98%",
        borderBottomWidth: 1,
        borderBottomColor: colors.dark_purple,
        height:90,
        padding: 7,
      },
    hour:{
        color: colors.dark_purple, 
        fontSize: 16,
    },
    plan:{
        flex:1,
        flexWrap: 'wrap',
        color: colors.purple, 
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 20,
    },
})
import { StyleSheet } from 'react-native'
import { lightColor } from '../../constants/color/index'

export const styles = StyleSheet.create({
    loadingView : {
        backgroundColor: lightColor.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: lightColor.primaryTextColor,
        fontSize: 14,
        fontWeight: 'bold'
    }
})
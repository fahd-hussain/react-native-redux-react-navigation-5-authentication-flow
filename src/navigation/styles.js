import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const padding = 10

import { lightColor } from "../constants/color";

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: lightColor.defaultPrimaryColor,
        width: (width * 3) / 4,
    },
    tabIconFocused: {
        color: lightColor.textPrimaryColor
    },
    tabIcon: {
        color: lightColor.defaultPrimaryColor
    },
    headerTitle: {
        backgroundColor: lightColor.defaultPrimaryColor,
    },
    headerTitleStyle: {
        fontFamily: "Overcraft-Bold",
        fontSize: 28,
        color: lightColor.textPrimaryColor
    },
    headerLeftIcon: {
        color: lightColor.textPrimaryColor,
        paddingLeft: padding
    },
    backArrow: {
        color: lightColor.textPrimaryColor,
        paddingLeft: padding
    }
});

export default styles;

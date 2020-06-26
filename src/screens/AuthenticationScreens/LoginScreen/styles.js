import { StyleSheet, Dimensions } from "react-native";

import { lightColor } from "../../../constants/color";

const padding = 10;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightColor.textPrimaryColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        paddingVertical: padding,
        width: "100%",
        alignItems: "center",
    },
    button: {
        backgroundColor: lightColor.accentColor,
        width: "90%",
    },
    buttonIcon: {
        color: lightColor.textPrimaryColor,
    },
    buttonText: {
        fontFamily: "Overcraft-Regular",
        fontSize: 24,
        paddingRight: 20,
        color: lightColor.textPrimaryColor
    },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";

import { lightColor } from "../../constants/color";

const width = Dimensions.get("window").width * 1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightColor.textPrimaryColor,
        flex: 1,
        justifyContent: "center",
    },
    drawerContentIcon: {
        // paddingLeft: 10
    },
    drawerContentTitle: {
        // paddingLeft: 10
    },
    displayPictureContainer: {
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    displayPicture: {
        width: width / 1.5,
        height: width / 1.5,
    },
    displayPictureRadius: {
        borderRadius: (width / 1.5)
    },
    displayPictureText: {
        fontFamily: "Overcraft-Regular",
        fontWeight: "bold",
        color: lightColor.primaryTextColor,
        fontSize: 18,
    },
    fabContainer: {
        backgroundColor: lightColor.textPrimaryColor
    },
    fabIcon: {
        color: lightColor.primaryTextColor
    }
});

export default styles;

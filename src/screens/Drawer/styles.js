import { StyleSheet, Dimensions } from "react-native";

import { lightColor } from "../../constants/color";

const width = Dimensions.get("window").width * 1;
const padding = 10;
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
        padding: padding,
        alignItems: "center",
        justifyContent: "center",
    },
    displayPicture: {
        width: width / 2,
        height: width / 2,
    },
    displayPictureRadius: {
        borderRadius: (width / 1.5)
    },
    displayPictureText: {
        padding: padding,
        fontFamily: "Overcraft-Regular",
        fontWeight: "bold",
        color: lightColor.primaryTextColor,
        fontSize: 18
    },
});

export default styles;

// style={{ paddingLeft: 10 }}

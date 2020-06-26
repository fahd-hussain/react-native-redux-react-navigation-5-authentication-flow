import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

import { lightColor } from "../../constants/color";

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
        fontSize: (Dimensions.get("window").width * 1) / 2 - 10,
        marginBottom: "5%",
        color: lightColor.defaultPrimaryColor,
    },
    displayPictureText: {
        fontFamily: "Overcraft-Regular",
        fontWeight: "bold",
        color: lightColor.primaryTextColor,
        fontSize: 18
    },
});

export default styles;

// style={{ paddingLeft: 10 }}

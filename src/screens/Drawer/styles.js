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
});

export default styles;

// style={{ paddingLeft: 10 }}

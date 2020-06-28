import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { List, ListItem, Text, Icon, Left, Body } from "native-base";

import styles from "./styles";
import { AuthContext } from "../../utils/authContext";
import { images } from "../../constants/images";

const DrawerItems = [
    {
        title: "Home",
        routeName: "Home",
        iconName: "home",
    },
    {
        title: "Share",
        routeName: "Share",
        iconName: "share",
    },
    {
        title: "Settings",
        routeName: "Profile",
        iconName: "cog",
    },
];

const Drawer = (props) => {
    const { logout } = useContext(AuthContext);
    const [profilePicture, setProfilePicture] = useState(null);
    const [firstname, setFirstname] = useState("Fahad");
    const [lastname, setLastname] = useState("Hussain");
    const userToken = useSelector((state) => state.token);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const { login } = userToken;

        if (login) {
            setAuth(true);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.displayPictureContainer}>
                <TouchableOpacity>
                    <ImageBackground
                        source={profilePicture === null ? images.profilePicture : profilePicture}
                        style={styles.displayPicture}
                        imageStyle={styles.displayPictureRadius}
                    >
                        {/* <View style={{ paddingLeft: width / 1.7, paddingTop: width / 1.7 }}>
                            <Icon name="edit" type="FontAwesome" onPress={getImageFromGallery} />
                        </View> */}
                    </ImageBackground>
                </TouchableOpacity>
                <View>
                    {auth ? (
                        <View style={{ flexDirection: "row" }}>
                            <Text style={[styles.displayPictureText]}>
                                {firstname} {lastname}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </View>
            <List
                dataArray={DrawerItems}
                keyExtractor={(element) => element.title}
                renderRow={(element) => (
                    <ListItem icon onPress={() => props.navigation.navigate(element.routeName)}>
                        <Left>
                            <Icon style={styles.drawerContentIcon} type="FontAwesome" name={element.iconName} />
                        </Left>
                        <Body>
                            <Text style={styles.drawerContentTitle}>{element.title}</Text>
                        </Body>
                    </ListItem>
                )}
            />
            <List>
                <ListItem icon onPress={() => logout()}>
                    <Left>
                        <Icon style={styles.drawerContentIcon} type="FontAwesome" name="sign-out" />
                    </Left>
                    <Body>
                        <Text style={styles.drawerContentTitle}>LOGOUT</Text>
                    </Body>
                </ListItem>
            </List>
        </SafeAreaView>
    );
};

export default Drawer;

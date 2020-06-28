import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Modal, TouchableOpacity, Dimensions, TextInput, SafeAreaView, ImageBackground } from "react-native";
import { List, ListItem, Text, Icon, Left, Body, Right, Fab, Button, Footer } from "native-base";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import styles from "./styles";
import { AuthContext } from "../../utils/authContext";
import uploadImage from "../../apis/uploadImage";
import { images } from "../../constants/images";

const width = Dimensions.get("window").width * 1;

const ProfileScreen = () => {
    const { logout } = useContext(AuthContext);
    const [profilePicture, setProfilePicture] = useState(null);
    //
    const [firstname, setFirstname] = useState("Fahad");
    const [editFirstname, setEditFirstname] = useState(false);
    //
    const [lastname, setLastname] = useState("Hussain");
    const [editLastname, setEditLastname] = useState(false);
    const userToken = useSelector((state) => state.token);
    const [auth, setAuth] = useState(null);
    const [DPModal, setDPModal] = useState(false);

    const [fabActive, setFabActive] = useState(false);

    useEffect(() => {}, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.displayPictureContainer}>
                <ImageBackground
                    source={profilePicture === null ? images.profilePicture : profilePicture}
                    style={styles.displayPicture}
                    imageStyle={styles.displayPictureRadius}
                >
                    <View style={{ paddingLeft: width / 1.4, paddingTop: width/1.4 }}>
                        <Fab
                            active={fabActive}
                            style={styles.fabContainer}
                            direction="left"
                            // position="bottomRight"
                            onPress={() => setFabActive(!fabActive)}
                        >
                            <Icon name="edit" type="FontAwesome5" style={styles.fabIcon}/>
                            <Button style={styles.fabContainer} onPress={getImageFromCamera}>
                                <Icon name="camera" type="FontAwesome5" style={styles.fabIcon}/>
                            </Button>
                            <Button style={styles.fabContainer} onPress={getImageFromGallery}>
                                <Icon name="images" type="FontAwesome5" style={styles.fabIcon}/>
                            </Button>
                        </Fab>
                    </View>
                </ImageBackground>
                {/* <Icon name="edit" type="FontAwesome" onPress={getImageFromGallery} /> */}
            </View>
            <List>
                {!editFirstname ? (
                    <ListItem iconRight>
                        <Body>
                            <Text style={styles.drawerContentTitle}>{firstname}</Text>
                        </Body>
                        <Right>
                            <Icon
                                style={styles.drawerContentIcon}
                                type="FontAwesome"
                                name="edit"
                                onPress={() => setEditFirstname(true)}
                            />
                        </Right>
                    </ListItem>
                ) : (
                    <ListItem>
                        <TextInput
                            // style={styles.textInput}
                            value={firstname}
                            onChangeText={(text) => setFirstname(text)}
                            onSubmitEditing={() => setEditFirstname(false)}
                            placeholder="First Name"
                            returnKeyType="done"
                            returnKeyLabel="done"
                        />
                    </ListItem>
                )}
                {/* Last name */}
                {!editLastname ? (
                    <ListItem iconRight>
                        <Body>
                            <Text style={styles.drawerContentTitle}>{lastname}</Text>
                        </Body>
                        <Right>
                            <Icon
                                style={styles.drawerContentIcon}
                                type="FontAwesome"
                                name="edit"
                                onPress={() => setEditLastname(true)}
                            />
                        </Right>
                    </ListItem>
                ) : (
                    <ListItem>
                        <TextInput
                            // style={styles.textInput}
                            value={lastname}
                            onChangeText={(text) => setLastname(text)}
                            onSubmitEditing={() => setEditLastname(false)}
                            placeholder="First Name"
                            returnKeyType="done"
                            returnKeyLabel="done"
                        />
                    </ListItem>
                )}
            </List>

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

const getImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraPermission.status === "granted" && cameraRollPermission.status === "granted") {
        const capturedImage = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!capturedImage.cancelled) {
            processImage(capturedImage.uri);
        }
    }
};

const getImageFromGallery = async () => {
    const selectImage = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 4],
    });

    if (!selectImage.cancelled) {
        processImage(selectImage);
    }
};

const processImage = async (image) => {
    await ImageManipulator.manipulateAsync(image.uri, [{ resize: { width: 400 } }], {
        format: "png",
    }).then((res) => {
        setProfilePicture({
            uri: res.uri,
            type: `image/png`,
            name: res.uri.substr(res.uri.lastIndexOf("/") + 1),
            width: res.width,
        });
    });

    uploadImage(profilePicture);
};

export default ProfileScreen;

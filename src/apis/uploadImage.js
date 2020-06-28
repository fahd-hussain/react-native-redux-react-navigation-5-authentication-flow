import axios from "axios";
const FormData = require('form-data');

import baseUrl from "../constants/baseUrl";

export const uploadImage = (image, token) => {
    const payload = new FormData();
    payload.append( "profilePicture", image );

    const url = `${baseUrl}/user/profilePicture`;

    axios(url, {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": token
        },
        data: payload,
    })
        .then((res) => console.log("done"))
        .catch((error) => console.log(error));
};

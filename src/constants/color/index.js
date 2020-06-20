// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=263238
const darkColor = {
    primaryColor: "#212121",
    primaryLightColor: "#484848",
    primaryDarkColor: "#000000",
    primaryTextColor: "#ffffff",
};

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=CFD8DC
export const lightColor = {
    primaryColor: "#cfd8dc",
    primaryLightColor: "#ffffff",
    primaryDarkColor: "#9ea7aa",
    primaryTextColor: "#000000",
};

export default color = ( dark ) => {
    if ( dark === false )
        return lightColor;
    
    if ( dark === true )
        return darkColor;

    else return
}
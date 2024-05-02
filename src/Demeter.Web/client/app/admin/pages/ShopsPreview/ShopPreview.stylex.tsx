import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
    shopPreviewPage: {
        backgroundColor: '#f3f4f6'
    },
    navbar:{
        flex: '2', 
        width: '100%',
    },
    container: {
        flex: '9', 
        width: '100%',
    },
    profileContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        padding: '30px 3% 10px 3%',
        backgroundColor: '#f3f4f5',
    },
    profileImage: {
        width: '100%',
        height: 'auto',
    },
    coverImage:{
        width: "100%",
        height: "auto",
        maxHeight: "500px",
        objectFit: "cover",
    },
    storyCard:{
        width: "100%", 
        maxWidth: 300, 
        margin: "20px 20px",
        display: "flex",
        direction: "row",
        gap: "8px"
    },
    cardContainer: {
        width: "100%", 
        margin: "20px 20px",
    },
    card:{
        flex: "1",
        margin: "20px 10px",
        minHeight: 100,
        minWidth: 250,
    },
    redBorder:{
        border: "1px solid #ff0000",
    },
    greenBorder:{
        border: "1px solid #00ff00",
    },
    yellowBorder:{
        border: "1px solid #ffff00",
    },
    blueBorder:{
        border: "1px solid #0000ff",
    },
    pinkBorder:{
        border: "1px solid #ff00ff",
    },
    profileStyle: {
        display: 'flex',    
    },
    profileAvatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        margin: -60,
        marginLeft: 40,
        marginBottom: 1,
        borderWidth: 3,
        borderColor: 'white',
        boxShadow: '0 0 0 1px #000000',
    },
    profileInfo: {
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 20,
        width: '100%',
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
        marginLeft: 50,
    },
    profileDetails: {
        display: 'flex',
        position: 'relative',
        margin: "5px 30px",
    },
    profileText: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        color: '#3b3b3b',
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
    },
    editButton: {
        position: 'absolute',
        top: '50%',
        transform: "translateY(-50%)",
        right: 30,
        backgroundColor: "#009f7f",
        color: "#fff",
    },
    // '@media screen and (max-width: 1200px)': {
    // profileStyle: {
    //     flexDirection: 'column',
    // },
    // },
    // '@media screen and (max-width: 1000px)': {
    // profileDetails: {
    //     flexDirection: 'column',
    // },
    // },
})
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
    cartPage:{
        position: 'absolute', 
        width: '100%', 
        minHeight:'100%',
        backgroundColor: '#f3f4f6',
    },
    horizontalSections: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
      },
    section1: {
        width: '20%',
        border: '1px solid #e5e7eb',
        padding: '25px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '5px',
        height: 'fit-content',
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    },
    shopName:{
        color: '#009F7F', 
        fontWeight: 'bolder', 
        fontSize:'16px', 
        textAlign:'center', 
        padding: '10px 0',
    },
    centeredImage: {
        maxWidth: '95%',
        maxHeight: '95%',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #f3f4f6',
    },
    section2: {
        width: '55%',
        boxSizing: 'border-box',
    },
    section3: {
        width: '20%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '280px',
    },
    box: {
        backgroundColor: '#ffffff',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 30px',
        borderRadius: '5px',
        marginBottom: '20px',
        border: '1px solid #e5e7eb',
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
    },
    totalBox: {
        padding: '10px 30px',
    },
    voucherApplyBox: {
        padding: '10px 13px', 
        margin: '0px 0 10px 0',
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    customModal: {
        width: '500px',
    },
})
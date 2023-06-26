import { createTheme } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Plus Jakarta Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif'
        ].join(','),
        headerTitle: {
            fontWeight: '800',
            color: 'black',
            fontSize: '18px'
        },
        headerLink: {
            color: 'black',
            fontSize: '18px'
        },
        profileSectionTitle: {
            color: 'black',
            fontSize: '48px'
        },
        mainTitle: {
            fontSize: '72px',
            lineHeight: '80px'
        },
        mainSubtitle: {
            fontSize: '24px',
            lineHeight: '46px',
            marginTop: '40px'
        },
        mainSectionTitle: {
            fontSize: '36px',
            lineHeight: '46px',
        },
        mainText: {
            fontSize: '24px',
            lineHeight: '46px',
        },
        editProductText: {
            fontSize: '23px',
            fontWeight: '500',
            lineHeight: '26px',
            letterSpacing: '0px',
            textAlign: 'left',
            marginTop: '8px',
        },
        productYellowName: {
            color: '#D7A324',
            fontSize: '32px',
            fontWeight: '500',
            lineHeight: '80px',
            letterSpacing: '0px',
            textAlign: 'left',
        },
        profileName: {
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '26px',
        },
        yellowTitle: {
            fontSize: '42px',
            lineHeight: '80px',
            color: '#D7A324',
        },
        smallTitle: {
            fontSize: '24px',
            fontWeight: '600',
        },
        mediumText: {
            fontSize: '20px',
            lineHeight: '46px',
        },
        cardDetails: {
            fontSize: '24px',
            fontWeight: 'bold',
            paddingBottom: '25px'
        },
        addressCart: {
            fontSize: '14px',
            color: 'gray'
        },
        paymentInformationText: {
            fontSize: '15px',
            lineHeight: '35px',
            fontWeight: '400'
        },
        textBold: {
            fontSize: '16px',
            fontWeight: '600'
        },
        text: {
            fontSize: '16px',
        },
        textLight: {
            fontSize: '16px',
            fontWeight: '400'
        },
        textSpaced: {
            fontSize: '18px',
            lineHeight: '40px',
        },
        salesTitle: {
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '42px',
            lineHeight: '50px',
            color: '#D7A324'
        }
    }
});

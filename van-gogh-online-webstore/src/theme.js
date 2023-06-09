import { createTheme } from '@mui/material';

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
        profileName: {
            fontStyle: 'normal',
            fontWeight: '300',
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
        text: {
            fontSize: '16px'
        }
    }
});

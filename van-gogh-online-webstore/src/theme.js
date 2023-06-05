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
        }
	}
});

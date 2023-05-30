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
		}
	}
});

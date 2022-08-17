import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#ab4bd5'
        },

        error: {
            main: '#ec0f2a'
        },
        common: {
            black: '#000000',
            white: '#ffffff',
            // green: '#3FEC0FFF'
        },
        success: {
            main: '#42D71AFF'
        }


    }

})

export default theme;

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main:"#111430",
            yellow:"#FBD062",
            green:"#7Ab259"
        }
    },
    components:{
        MuiContainer:{
            defaultProps:{
                maxWidth:"lg",

            }
        },
    MuiButton:{
        styleOverrides:{
            root:{
                fontSize:"1rem",
                padding:"0.6rem 2.5rem"
            }
        },
        defaultProps:{
            variant:'container',
            color:'primary'
        }
    }
    }
})
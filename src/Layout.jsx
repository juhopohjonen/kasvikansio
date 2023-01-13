import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Outlet } from "react-router-dom"

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <AppBar>
                <Toolbar>
                    <Typography variant='h6' component='div'>Kasvikansio</Typography>

                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 10 }}>
                <Outlet />
            </Container>

        </ThemeProvider>
    )
}

export default Layout
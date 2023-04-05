import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Outlet, Link } from "react-router-dom"

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
                    <Typography variant='h6' sx={{ textDecoration: 'none', color: 'white' }} component={Link} to='/'>Eliökokoelma</Typography>

                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 10 }}>
                <Outlet />
            </Container>

        </ThemeProvider>
    )
}

export default Layout
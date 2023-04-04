import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { KasviThumb } from "../Components/KasviKortit"

import kasvit from "../kasvit"

const Index = () => {
    return (
        <>
            <Typography variant='h3' component='h1'>Eliökokoelma</Typography>
            <Typography paragraph>Eliökokoelma. Juho, 8b</Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}> 

                
            {kasvit.map(kasvi => <KasviThumb key={kasvi.id} {...kasvi} />)}

            <br />

            </Box>

        </>
    )
}

export default Index
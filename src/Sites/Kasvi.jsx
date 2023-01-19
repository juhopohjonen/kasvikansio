import { Breadcrumbs, Link as MuiLink } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { KasviKortti } from "../Components/KasviKortit"

import kasvit from "../kasvit"

const Kasvi = () => {
    const { id } = useParams()
    const kasvi = kasvit.find(kasvi => kasvi.id === id)


    return (
        <>
            <Breadcrumbs sx={{ mb: 1 }}>
                <MuiLink underline="hover" color="inherit" as={Link} to='/'>
                    Kasvit
                </MuiLink>

                <MuiLink underline="hover" color="inherit" as={Link} to={`/kasvi/${id}`}>
                    {kasvi.officName ? <>{kasvi.title} (<i>{kasvi.officName}</i>)</> : kasvi.title}
                </MuiLink>
            </Breadcrumbs>

            <KasviKortti
                {...kasvi}
            />
        </>
    )
}

export default Kasvi
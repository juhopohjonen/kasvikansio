import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const KasviThumb = ({ title, officName, img, id }) => {
    const linkToKasvi = `/kasvi/${id}`

    return (
        <Card sx={{ maxWidth: '20rem', marginRight: 2, marginBottom: 3 }}>
            { img ? (
                <CardActionArea component={Link} to={linkToKasvi}>
                    <CardMedia component='img' src={img} />
                </CardActionArea>
            ) : null }
            <CardContent>
                <Typography variant='h5' component='div'>
                    {
                        officName ? (
                        <>
                            {title}, <i>{officName}</i>
                        </>
                        ) : (
                            <>
                                {title}
                            </>
                        )
                    }
                </Typography>

                <Button sx={{ mt: 2 }} variant='outlined' component={Link} to={linkToKasvi}>Katso</Button>

            </CardContent>


        </Card>
    )
}

const KasviKortti = ({ img, officName, title, contentArr }) => {
    return (
        <Card sx={{ maxWidth: '40rem', marginRight: 2, marginBottom: 3 }}>
            { img ? (
                    <CardMedia component='img' src={img} />
            ) : null }
            <CardContent>
                <Typography sx={{ mb: 1.5 }} variant='h5' component='div'>
                    {
                        officName ? (
                        <>
                            {title}, <i>{officName}</i>
                        </>
                        ) : (
                            <>
                                {title}
                            </>
                        )
                    }
                </Typography>


                {contentArr ? contentArr.map((text, ind) => (
                    <Typography key={ind} paragraph>{text}</Typography>
                )) : null}

            </CardContent>
        </Card>
    )
}

export {
    KasviThumb,
    KasviKortti
}
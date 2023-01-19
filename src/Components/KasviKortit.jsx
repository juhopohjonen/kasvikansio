import { Avatar, Link as MuiLink, Button, Card, CardActionArea, CardContent, CardMedia, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material"
import { Box } from "@mui/system"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const KasviThumb = ({ title, officName, images, id }) => {
    const linkToKasvi = `/kasvi/${id}`
    
    let img = 
    images && images.length > 0 
        ? images[0] 
        : null

    return (
        <Card sx={{ maxWidth: '17.5rem', marginRight: 2, marginBottom: 3 }}>
            { 
                img ? 
                        <CardActionArea component={Link} to={linkToKasvi}>
                                <CardMedia component='img' src={img} height="200" width="100" />
                        </CardActionArea>
                : null
        
            }
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

const KasviKortti = ({ images, officName, title, contentArr, infoCard, lahteet }) => {
    const [imageIndex, setIndex] = useState(0)

    let img = images[imageIndex]

    const imageRef = useRef(null)


    const nextImage = () => {
        if (images.length - 1 <= imageIndex) {
            return setIndex(0)
        }

        setIndex(imageIndex + 1)
    }

    return (
        <Card sx={{ maxWidth: '30rem', marginRight: 2, marginBottom: 3 }}>
            { img ? (
                    <CardMedia id="image" ref={imageRef} component='img' alt={`Eliö, jonka nimi on ${officName ? `${title}, ${officName}` : `${title}`}`} src={img} width="200" height="550" />
            ) : null }
            <CardContent>
                <Typography sx={{ mb: 1.5 }} variant='h5' component='h1'>
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


                    {
                        img ? <Button variant='outlined' onClick={() => window.open(document.getElementById('image').src)} target="_blank" sx={{ mr: 0.5, mt: 0.5 }}>Katso kuva laajempana <AspectRatioIcon sx={{ ml: 1 }} /></Button> : null
                    }

                    {
                        images.length > 1 ? <Button sx={{ mt: 0.5 }} variant='outlined' color='secondary' onClick={nextImage}>Seuraava kuva <NavigateNextIcon /></Button> : null
                    }            

                <Typography sx={{ mt: 1 }} color='text.secondary' textAlign='right' variant='body1' paragraph><b>Kuva {imageIndex + 1} / {images.length}</b></Typography>


                <InfoCard infoCard={infoCard} contentArr={contentArr} />
            
                {
                    lahteet && lahteet.length > 0 
                        ? (
                            <>
                            <Typography variant='h6' component='h3'>Lähteet</Typography>
                                {lahteet.map((lahde, index) => <Typography key={index} paragraph><MuiLink target="_blank" href={lahde.url}>{lahde.url}</MuiLink>, {lahde.kohde}</Typography>)}
                            </>

                        )
                        : null
                }
                    
                <Divider />

                <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
                    Huomioi, että kuvan laajentaminen vaatii <b>erittäin</b> paljon resursseja, joten heikkotehoinen tietokone voi mennä solmuun kaatumisen johdosta! Jos olet kiinnostunut solmuun laittamisesta, katso video, jossa <MuiLink target="_blank" href="https://www.youtube.com/watch?v=Y1HIDtGZlXI">Raikku laittaa urut solmuun.</MuiLink>
                </Typography>

            </CardContent>

        </Card>
    )
}

const InfoCard = ({ infoCard, contentArr }) => {
    if (!infoCard) {
        return null
    }

    return (
        <>
            <Typography variant='h6' component='h2'>Tietoja</Typography>


            <List sx={{ width: '100%' }}>
                {
                    infoCard.kuvauspaikka ? (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <RoomIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={infoCard.kuvauspaikka} secondary="Kuvauspaikka" />
                        </ListItem>
                    ) : null
                }

                {
                    infoCard.kuvausaika ? (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccessTimeFilledIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={infoCard.kuvausaika} secondary="Kuvausaika" />
                        </ListItem>
                    ) : null
                }
            </List>


            {contentArr ? contentArr.map((text, ind) => (
                        <Typography key={ind} paragraph>{text}</Typography>
            )) : null}

        </>
    )
}

export {
    KasviThumb,
    KasviKortti
}
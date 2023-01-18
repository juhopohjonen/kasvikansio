import manty1 from './Kasvikuvat/Mänty/manty.jpg'
import manty2 from './Kasvikuvat/Mänty/manty2.webp'

class Kasvi {    
    constructor(title, officName, images, contentArr, infoCard, lahteet) {
        this.title = title
        this.officName = officName
        this.images = images

        this.id = encodeURIComponent(title.split('').map(word => {
            if (word !== 'ä' && word !== 'ö') {
                return word
            }

            return ''
        }).join(''))
    
        this.contentArr = contentArr
        this.infoCard = infoCard
        this.lahteet = lahteet
    }
}

class Lahde {
    constructor(url, kohde) {
        this.url = url
        this.kohde = kohde
    }
}

const kasvit = [
    new Kasvi('Metsämänty', 'Pinus sylvestris', [manty1, manty2], ['Metsämänty on puu, joka kasvaa monenlaisissa paikoissa: metsissä  ja suolla. Sitä esiintyy niin suolla kuin metsissäkin, ja se on suomen yleisin puulaji ja levinnyt lähes koko suomen alueelle.'], {
        kuvausaika: '10.1.2023',
        kuvauspaikka: 'Oulun normaalikoulun piha'
    },
    [
        new Lahde("https://luontoportti.com/t/922/manty", 'Luontoportti')
    ])
]


export default kasvit
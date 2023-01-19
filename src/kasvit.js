import manty1 from './Kasvikuvat/Mänty/manty1.webp'
import manty2 from './Kasvikuvat/Mänty/manty2.webp'

import haapa1 from './Kasvikuvat/Haapa/haapa1.webp'
import haapa2 from './Kasvikuvat/Haapa/haapa2.webp'

import harmaalokki1 from './Kasvikuvat/Harmaalokki/lokki.webp'

import nokkosperhonen1 from './Kasvikuvat/Nokkosperhonen/nokkosperhonen.webp'

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
    new Kasvi('Metsämänty', 'Pinus sylvestris', [manty1, manty2], ['Metsämänty on puu, joka kasvaa monenlaisissa paikoissa: metsissä ja suolla. Sitä esiintyy niin suolla kuin metsissäkin, ja se on suomen yleisin puulaji ja levinnyt lähes koko suomen alueelle.'], {
        kuvausaika: '10.1.2023',
        kuvauspaikka: 'Oulun normaalikoulun piha'
    },
    [
        new Lahde("https://luontoportti.com/t/922/manty", 'Luontoportti')
    ]),
    
    new Kasvi('Haapa', 'Populus tremula', [haapa1, haapa2], [
        'Haapa kasvaa esimerkiksi kuivissa, tuoressa, lehtomaisissa kangasmetsissä sekä rehevissä korvissa.'
    ], {
        kuvausaika: '10.1.2023',
        kuvauspaikka: 'Kaitoväylä (90540)'
    },
    [
        new Lahde("https://luontoportti.com/t/925/haapa", 'Luontoportti')
    ]),

    new Kasvi('Harmaalokki', 'Larus argentatus', [harmaalokki1], [], {
        kuvausaika: '7.6.2022',
        kuvauspaikka: 'Linnankatu, Oulu'
    }),

    new Kasvi('Nokkosperhonen', 'Aglais urticae', [nokkosperhonen1], [], {
        kuvausaika: '19.7.2022',
        kuvauspaikka: 'Puutossalmen lossi, Pohjois-Savo'
    })

]


export default kasvit
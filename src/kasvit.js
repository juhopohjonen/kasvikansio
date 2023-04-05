import manty1 from './Kasvikuvat/Mänty/manty1.webp'
import manty2 from './Kasvikuvat/Mänty/manty2.webp'
import haapa1 from './Kasvikuvat/Haapa/haapa1.webp'
import haapa2 from './Kasvikuvat/Haapa/haapa2.webp'
import harmaalokki1 from './Kasvikuvat/Harmaalokki/lokki.webp'
import nokkosperhonen1 from './Kasvikuvat/Nokkosperhonen/nokkosperhonen.webp'
import rauduskoivu1 from './Kasvikuvat/Rauduskoivu/rauduskoivu1.webp'
import rauduskoivu2 from './Kasvikuvat/Rauduskoivu/rauduskoivu2.webp'
import telkka1 from './Kasvikuvat/Telkka/telkka1.webp'
import kalvolude from './Kasvikuvat/Kalvolude/kalvolude1.webp'
import sormipaisukarve from './Kasvikuvat/Sormipaisukarve/sormi.jpg'
import kurki from './Kasvikuvat/Kurki/kurki.jpg'
import haisupimikka from './Kasvikuvat/Haisupimikkä/haisupimikka.jpg'
import haavankeltajakala from './Kasvikuvat/Haavankeltajakala/haavankeltajakala.jpg'
import porrokaapa from './Kasvikuvat/Porrokaapa/porrokaapa.jpg'
import jarviruoko from './Kasvikuvat/Jarviruoko/jarviruoko.jpg'
import metsaetana from './Kasvikuvat/Metsaetana/metsaetana.webp'
import sinisiipi from './Kasvikuvat/Paatsamansinisiipi/sinisiipi.jpg'
import lehtokantajaara from './Kasvikuvat/Lehtikantojaara/lehtikantojaara.webp'
import metsamittari from './Kasvikuvat/Metsamittari/metsamittari.webp'
import isohely from './Kasvikuvat/Isohelysieniainen/isohelysieni.jpg'
import laulujoutsen from './Kasvikuvat/Laulujoutsen/laulujoutsen.jpg'
import rapuhamahakki from './Kasvikuvat/Rapuhamahakki/rapuhamahakki.jpg'
import huonekarpanen from './Kasvikuvat/Huonekarpanen/huonekarpanen.jpg'
import ampiaisvieras from './Kasvikuvat/Ampiaisvieras/ampiaisvieras.webp'
import seinasammal from './Kasvikuvat/Seinasammal/seinasammal.jpg'
import virnaperhonen from './Kasvikuvat/Virnaperhonen/virnaperhonen.jpg'
import hamahakki from './Kasvikuvat/Hamahakki/hamahakki.jpg'
import samettipunkki from './Kasvikuvat/Samettipunkki/samettipunkki.jpg'

class Kasvi {    
    constructor(title, officName, images, contentArr, infoCard, lahteet, kasvupaikka) {
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
        this.kasvupaikka = kasvupaikka
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
    ], 'Niin soilla kuin metsissäkin'),
    
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
    }),

    new Kasvi('Rauduskoivu', 'Betula pendula', [rauduskoivu1, rauduskoivu2], ['Katso kuva 2!'], {
        kuvausaika: '10.1.2023',
        kuvauspaikka: 'Oulun normaalikoulun piha'
    }, [new Lahde('https://heinavesi.fi/rauduskoivu', 'Heinävesi')], 'Keski -ja runsasravinteiset kasvupaikat'),

    new Kasvi('Telkkä', 'Bucephala clangula', [telkka1], [], {
        kuvausaika: '28.6.2022',
        kuvauspaikka: 'Jokelantie, Otalampi'
    }),

    new Kasvi('Kalvolude', 'Kleidocerys resedae', [kalvolude], ['Kalvolude on Pohjois-Pohjanmaalla sekä sitä etelämpänä hyvin yleinen lude, joka on kooltaan n. 4.5-6.0 mm pitkä.'], {
            kuvausaika: '10.9.2022',
            kuvauspaikka: 'Kaijonharju, Oulu' 
        }
    ),

    new Kasvi('Sormipaisukarve', 'Hypogymnia physodes', [sormipaisukarve], ['Sormipaisukarve on hyvin yleinen jäkälälaji, joka on hyvin yleinen koko maassa.'], {
        kuvausaika: '31.1.2023',
        kuvauspaikka: 'Kaijonharju, Oulu'
    }, [
        new Lahde('https://www.luopioistenkasvisto.fi/Sivut/jakalat/sormipaisukarve.html', 'Luopioisten kasvisto')
    ]
    ),

    new Kasvi('Haisupimikkä', 'Bolitophagus reticulatus', [haisupimikka], ['Haisupimikkä on kovakuoriainen. Haisupimikkä voi kuoriutua esimerkiksi taulakäävästä. Sen uhanalaisuusluokitus on elinvoimainen., '], {
        kuvausaika: '31.5.2022',
        kuvauspaikka: 'Kuivasjärvi, Oulu'
    },
    [
        new Lahde('https://laji.fi/taxon/MX.195251', 'Laji.fi'),
        new Lahde('https://dynamic.hs.fi/2019/kielletty_metsa/', 'Helsingin sanomat')
    ]),

    new Kasvi('Haavankeltajäkälä', 'Xanthoria parietina', [haavankeltajakala], ['Haavankeltajäkälä on ruusukkeina kasvava keltainen jäkälä.'], {
        kuvausaika: '4.3.2023',
        kuvauspaikka: 'Linnanmaa, Oulu'
    }, [new Lahde('https://kasvio.avoin.jyu.fi/laji.php?id=354', 'Valokki-nettikasvio')],
    'Puiden rungoilla'
    ),

    new Kasvi('Pörrökääpä', 'Cerrena unicolor', [porrokaapa], ['Pörrökääpä on Suomessa yleinen kääpälaji. Sen uhanalaisuusluokitus Suomessa on elinvoimainen. Kyseinen kääpälaji aiheittaa valkolahoa lehtipuilla.'], {
        kuvausaika: '4.3.2023',
        kuvauspaikka: 'Kuivasjärvi, Oulu'
    },
    [
        new Lahde('https://inaturalist.laji.fi/taxa/194476-Cerrena-unicolor', 'iNaturalist Fi (Laji.fi)')
    ], 'Tyypillisesti koivut isäntäpuina.'),

    new Kasvi('Järviruoko', 'Phragmites australis', [jarviruoko], ['Ruohovartinen kasvi. Kasvaa tyypillisesti rannoilla. Lisääntyy siemenien ja juurakoiden avulla. Ainoa suomessa kasvava ruokolaji: linnut käyttävät ruoikoita ruokailupaikkana.'], {
        kuvausaika: '4.3.2023',
        kuvauspaikka: 'Kuivasjärvi, Oulu'
    }, [
        new Lahde('https://luontoportti.com/t/2823/jarviruoko', 'Luontoportti')
    ]),
    
    new Kasvi('Metsäetana', 'Arion fuscus', [metsaetana], ["Elinvoiminen etana. Tummat sivujuovat. Pohjaväriltään kellertävänruskea"], {
        kuvausaika: '4.7.2022',
        kuvauspaikka: 'Kuivasranta, Oulu'
    }, [
        new Lahde('https://ötökkätieto.fi/species?id=139', 'Ötökkätieto')
    ]),

    new Kasvi('Paatsamasinisiipi', 'Celastrina argiolus', [sinisiipi], ['Etelä -ja Keski-Suomessa yleinen, yleistynyt lähiaikoina myös pohjoisemmassa. Suomen kansallisperhonen.'], {
        kuvausaika: '31.5.2023',
        kuvauspaikka: 'Kuivasranta, Oulu'
    }),

    new Kasvi('Lehtokantojäärä', 'Rhagium mordax', [lehtokantajaara], [], {
        kuvausaika: '31.5.2023',
        kuvauspaikka: 'Kuivasranta, Oulu'
    }),

    new Kasvi('Metsämittari', 'Ematurga atomaria', [metsamittari], {
        kuvausaika: '1.6.2022',
        kuvauspaikka: 'Letonniemen suojelualue, Oulu'
    }),

    new Kasvi('Isohelysieniäinen', 'Triplax russica', [isohely], [], {
        kuvausaika: '31.5.2022',
        kuvauspaikka: 'Ritaharjuntie, Oulu'
    }),
    
    new Kasvi('Laulujoutsen', 'Cygnus cygnus', [laulujoutsen], [], {
        kuvausaika: '30.5.2023',
        kuvauspaikka: 'Kuivasjärvi, Oulu'
    }),

    new Kasvi('Rapuhämähäkki', 'Thomisidae', [rapuhamahakki], [], {
        kuvausaika: '25.5.2022',
        kuvauspaikka: 'Mallatsaari, Etelä-Savo'
    }),

    new Kasvi('Huonekärpänen', 'Musca domestica', [huonekarpanen], [], {
        kuvausaika: '8.7.2022',
        kuvauspaikka: 'Ruskotunturi, Oulu'
    }),

    new Kasvi('Ampiaisvieras', 'Volucella pellucens', [ampiaisvieras], {
        kuvausaika: '6.7.2022',
        kuvauspaikka: 'Huutilampi,Oulu'
    }),

    new Kasvi('Seinäsammal', 'Pleurozium schreberi', [seinasammal], [], {
        kuvausaika: '31.1.2023',
        kuvauspaikka: 'Kaijoharju-Linnanmaa, Oulu'
    }, [
        new Lahde('https://www.upmforestlife.com/fi/lajit/sein%C3%A4sammal#:~:text=Sein%C3%A4sammal%20kasvaa%20maassa%2C%20lahopuilla%2C%20kivill%C3%A4,on%20aikanaan%20k%C3%A4ytetty%20seinien%20tiivist%C3%A4miseen.', 'Upm Forest Life')
    ], 'Maassa, lahopuilla, kivillä, rämeiden mättäillä'),

    new Kasvi('Virnaperhonen', 'Leptidea sinapis', [virnaperhonen], {
        kuvausaika: '31.5.2023',
        kuvauspaikka: 'Ponsikuja, Oulu'
    }),

    new Kasvi('Hämähäkki', 'Entelegynae', [hamahakki], {
        kuvausaika: '11.6.2022',
        kuvauspaikka: 'Kaijonharju, Oulu'
    }),

    new Kasvi('Samettipunkki', 'Trombidium', [samettipunkki], [], {
        kuvausaika: '1.6.2022',
        kuvauspaikka: 'Letonniemen suojelualue'
    }),

    new Kasvi('Kurki', 'Grus grus', [kurki], ['Kurki on suuri lintu, jonka arvioitu pesimäkanta Suomessa on n. 40 000 paria. Se talvehti Pohjois-Arfrikassa. Tuntomerkkeinä pitkät jalat ja kaula. Harmaa lintu.'], {
        kuvausaika: '20.7.2022',
        kuvauspaikka: 'Juonionlahti, Kuopio'
    },
    [
        new Lahde('https://luontoportti.com/t/599/kurki', 'Luontoportti')
    ])

,]


export default kasvit
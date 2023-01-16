import manty1 from './Kasvikuvat/Mänty/manty.jpg'

class Kasvi {    
    constructor(title, officName, img, contentArr) {
        this.title = title
        this.officName = officName
        this.img = img
        this.id = encodeURI(title.toLowerCase())
        this.contentArr = contentArr
    }
}

const kasvit = [
    new Kasvi('Esimerkkikasvi', 'joku laji',  manty1, ['Wassap', 'Moro!'])
]


export default kasvit
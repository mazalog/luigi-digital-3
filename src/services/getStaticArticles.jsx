
const list = [
    {
        id: 1,
        brand: 'NIKE',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/modasports_2017_240951619_683957122999580_3471698206969933232_n.jpg?alt=media&token=72f014ee-4614-4928-a2df-3623b47c6d53',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/modasports_2017_240951619_683957122999580_3471698206969933232_n.jpg?alt=media&token=72f014ee-4614-4928-a2df-3623b47c6d53',
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/modasports_2017_240945888_208408191330461_6681439826926121076_n.jpg?alt=media&token=91a6f5b4-4662-4ad1-bd25-0f1220f2f134'
        ],
        price: 75,
        product_name: 'VAPOR WAFFLE YELOW',
        sale_price: '',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        start: 4.5,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 2,
        brand: 'NIKE',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/modasports_2017_240946777_213242447441214_2671390476781602950_n%20(1).jpg?alt=media&token=5069c6d5-ec65-4579-84da-3d8ad05a74e5',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/modasports_2017_240946777_213242447441214_2671390476781602950_n%20(1).jpg?alt=media&token=5069c6d5-ec65-4579-84da-3d8ad05a74e5',
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/m3.jpg?alt=media&token=635b95a5-e942-44f2-a312-e54461c15c3b'
        ],
        price: 75,
        product_name: 'PAUL GEORGE 5',
        sale_price: '',
        sizes: [39, 40, 41, 44, 45],
        start: 5.0,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 3,
        brand: 'UNDER ARMOUR',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M4.jpg?alt=media&token=c05d4734-463b-44da-89c6-58fe0f2035e3',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M4.jpg?alt=media&token=c05d4734-463b-44da-89c6-58fe0f2035e3',
        ],
        price: 60,
        product_name: 'BOTAS UNDER ARMOUR',
        sale_price: '',
        sizes: [39, 40, 41, 44, 45],
        start: 5.0,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 4,
        brand: 'ADIDAS',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M6.jpg?alt=media&token=468fb978-98b1-4c49-9eb1-07f8fde3723b',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M6.jpg?alt=media&token=468fb978-98b1-4c49-9eb1-07f8fde3723b',
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M5.jpg?alt=media&token=88b2fd9f-2752-4293-bb54-d8cdbda2ea94',

        ],
        price: 75,
        product_name: 'ADIDAS DROP STEP',
        sale_price: '',
        sizes: [39, 41, 44, 45],
        start: 4.3,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 5,
        brand: 'PRADA',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M7.jpg?alt=media&token=c15a26b5-9181-4a8a-81bc-b8cdd09e586f',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M7.jpg?alt=media&token=c15a26b5-9181-4a8a-81bc-b8cdd09e586f',
        ],
        price: 60,
        product_name: 'PRADA THUNDER CLOUDBUST',
        sale_price: '',
        sizes: [39, 41, 44, 45],
        start: 4.7,
        section: 'CALZADO',
        gender: 'CABALLERO'

    },
    {
        id: 6,
        brand: 'JORDAN',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M8.jpg?alt=media&token=1f7b358e-1b6a-471e-a383-5202427d5e2a',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M8.jpg?alt=media&token=1f7b358e-1b6a-471e-a383-5202427d5e2a',
        ],
        price: 70,
        product_name: 'JORDAN OG UNIVERSITY',
        sale_price: '',
        sizes: [39, 41, 44, 45],
        start: 4.3,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 7,
        brand: 'BALENCIAGA',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M9.jpg?alt=media&token=d5ad78ad-2890-4a63-addf-dc9cc6664fb0',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M9.jpg?alt=media&token=d5ad78ad-2890-4a63-addf-dc9cc6664fb0',
        ],
        price: 70,
        product_name: 'SHOES BALENCIAGA',
        sale_price: '',
        sizes: [39, 41, 44, 45],
        start: 4.0,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 8,
        brand: 'JORDAN',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M10.jpg?alt=media&token=405b1728-71ec-4494-9996-a0ef154a8756',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M10.jpg?alt=media&token=405b1728-71ec-4494-9996-a0ef154a8756',
        ],
        price: 75,
        product_name: 'JORDAN ZOOM 92',
        sale_price: '',
        sizes: [39, 41, 44, 45],
        start: 4.9,
        section: 'CALZADO',
        gender: 'CABALLERO'
    },
    {
        id: 9,
        brand: 'ADIDAS',
        cover_photo: 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M11.jpg?alt=media&token=0364238e-7403-411c-a7e9-2da19c85eeb4',
        information: 'CONTENIDO INFORMATICO',
        photos: [
            'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/M11.jpg?alt=media&token=0364238e-7403-411c-a7e9-2da19c85eeb4',
        ],
        price: 75,
        product_name: 'ADIDAS STAN SMITH',
        sale_price: '',
        sizes: [39, 41, 44, 45],
        start: 4.3,
        section: 'CALZADO',
        gender: 'CABALLERO'
    }
];

export default list


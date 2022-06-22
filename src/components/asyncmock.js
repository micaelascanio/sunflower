
const allProducts = [
    {
        id: '1',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_616517-MLA46192769019_052021-F.webp' ,
        category: 'Plants',
        stock: 15,
        name: 'Ctenanthe',
        price: `$25`,
        description: "Being plants that come from tropical forests, the situation and care must be as similar as possible, for this we will not put them in the sun. The substrate or soil (peat, sand and decomposed leaves) must be loose, fertile and with good drainage. The ambient humidity must be high and in this way we can prevent the edges of the leaves or the tips from drying out. For this, it is convenient to spray the leaves frequently with good quality water and at room temperature. The subscriber must be frequent, every month in times of growth but in low quantities. The substrate must not be dry, rather keep it slightly moist. If they are indoors, it is convenient to spray the leaves frequently with good quality water and at room temperature. From time to time it is advisable to clean the leaves with a damp cloth. Do not use products to polish the leaves, at most put a little beer in the water that we use to clean them. The environment must be warm, no more than 22 degrees and no less than 15. All those leaves that deteriorate must be removed at ground level."
 /*este producto ya esta cargado en firebase */
    },
    {
        id: '2',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_994356-MLA45756985852_042021-F.webp' ,
        category: 'Plants',
        stock: 10,
        name: 'Cordyline rubra',
        price: `$35`,
        description: "This species is identified mainly by the leaf stems, flat or somewhat concave and whose length is about 5 to 20 cm. The matte green leaves are narrowly elongated and are 15 to 50 cm long by 3 to 5.5 cm wide. Flowering occurs in summer, the small lilac flowers emerge from the apex of the plant. The fruit, a bright red berry about 10 mm in diameter, is borne in panicles 10 to 40 cm long.It reproduces easily from seeds or stem cuttings. C. rubra is not as widely cultivated as Cordyline australis, however it is also suitable for use in gardens with moist, semi-shaded soils or as an indoor plant. It is a hardy plant that tolerates a lack of care."
    },
    {
        id: '3',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_733363-MLA46809135407_072021-F.webp' ,
        category: 'Plants',
        stock: 5,
        name: 'Monstera',
        price: `$39`,
        description: "In some countries the fruit of this plant is used as a food called 'ceriman' with a flavor similar to banana with pineapple, hence its scientific name. This plant is used in floristry to form bouquets of flowers."
    },

    {
        id: '4',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/rosa-181-b52efc2805976e9fe716322698667249-640-0.jpg' ,
        category: 'Pots',
        stock: 15,
        name: 'Pink Pot',
        price: `$15`,
        description:"Made of polyethylene, a material highly resistant to pressure and impact. It does not generate hazardous waste in its manufacture and has a low environmental impact. Suitable for outdoors, resistant to water, humidity and UV rays. Does not dry out. Simple to clean. Chemical resistant."
    },  /*este producto ya esta cargado en firebase */
    {
        id: '5',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/beige-182-3113eb01f1d7fd16ca16322699861321-640-0.jpg' ,
        category: 'Pots',
        stock: 15,
        name: 'Nude Pot',
        price: `$17`,
        description:"Made of polyethylene, a material highly resistant to pressure and impact. It does not generate hazardous waste in its manufacture and has a low environmental impact. Suitable for outdoors, resistant to water, humidity and UV rays. Does not dry out. Simple to clean. Chemical resistant."
    },
    {
        id: '6',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/979/572/products/gris-cililindrica-301-72f04e74bbcf12d4be16322390089440-640-0.jpg' ,
        category: 'Pots',
        stock: 15,
        name: 'Yellow Pot',
        price: `$14`,
        description:"Made of polyethylene, a material highly resistant to pressure and impact. It does not generate hazardous waste in its manufacture and has a low environmental impact. Suitable for outdoors, resistant to water, humidity and UV rays. Does not dry out. Simple to clean. Chemical resistant."
    }
    
    
]


/* funcion que simula el consumo de una API*/ 


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allProducts)
        }, 500)
    })
}

/* funcion que llama al producto por id */ 


export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allProducts.find (product => product.id === id) )
        }, 2000)
    })
}

/* funcion que llama a los productos por categoria */ 

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allProducts.filter (product => product.category === categoryId) )
        }, 2000)
    })
}


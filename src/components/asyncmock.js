

const allPlants = [
    {
        id: '1',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_616517-MLA46192769019_052021-F.webp' ,
        category: 'plants',
        stock: 15,
        name: 'Ctenanthe',
        price: 2500,

    },
    {
        id: '2',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_994356-MLA45756985852_042021-F.webp' ,
        category: 'plants',
        stock: 10,
        name: 'Dracena',
        price: 3500,
    },
    {
        id: '3',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_733363-MLA46809135407_072021-F.webp' ,
        category: 'plants',
        stock: 5,
        name: 'Monstera',
        price: 3900,
    },
]


/* funcion que simula el consumo de una API*/ 


export const getPlants = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(allPlants)
        }, 2000)
    })
}


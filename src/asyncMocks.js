const products = [
    {
        "id": 1,
        "nombre": "Fernet Branca",
        "precio": 9000,
        "img": "./img/fernet.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Fernet Branca es un amaro de hierbas argentino, ideal para cócteles."
    },
    {
        "id": 2,
        "nombre": "Fernet Buhero",
        "precio": 7500,
        "img": "./img/buhero.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Fernet Buhero, una variante clásica con un sabor distintivo."
    },
    {
        "id": 3,
        "nombre": "Vodka Smirnoff",
        "precio": 6000,
        "img": "./img/smirnoff.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Vodka Smirnoff, conocido por su pureza y suavidad."
    },
    {
        "id": 4,
        "nombre": "Vodka Absolut",
        "precio": 18000,
        "img": "./img/absolut.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Vodka Absolut, famoso por su sabor y calidad premium."
    },
    {
        "id": 5,
        "nombre": "Cerveza Quilmes",
        "precio": 2000,
        "img": "./img/quilmes.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Cerveza Quilmes, la lager argentina más famosa."
    },
    {
        "id": 6,
        "nombre": "Cerveza Brahma",
        "precio": 2100,
        "img": "./img/brahma.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Cerveza Brahma, una opción refrescante y de buen sabor."
    },
    {
        "id": 7,
        "nombre": "Cerveza Stella Artois",
        "precio": 2600,
        "img": "./img/stella.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Cerveza Stella Artois, una lager belga de renombre internacional."
    },
    {
        "id": 8,
        "nombre": "Gancia",
        "precio": 3200,
        "img": "./img/gancia.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Gancia, un aperitivo refrescante con un sabor único."
    },
    {
        "id": 9,
        "nombre": "Malibu",
        "precio": 15000,
        "img": "./img/malibu.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Malibu, un ron con sabor a coco, perfecto para cócteles tropicales."
    },
    {
        "id": 10,
        "nombre": "Jaggermeister",
        "precio": 19000,
        "img": "./img/jagger.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Jägermeister, un licor de hierbas alemán con un sabor característico."
    },
    {
        "id": 11,
        "nombre": "Campari",
        "precio": 6000,
        "img": "./img/campari.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Campari, un aperitivo amargo ideal para cocktails."
    },
    {
        "id": 12,
        "nombre": "Jack Daniels Honey",
        "precio": 45000,
        "img": "./img/jack.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Jack Daniels Honey, un bourbon suave con un toque de miel."
    },
    {
        "id": 13,
        "nombre": "Red Label",
        "precio": 30000,
        "img": "./img/redlabel.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Johnnie Walker Red Label, un whisky escocés con un sabor equilibrado."
    },
    {
        "id": 14,
        "nombre": "Johnnie Walker (blue label)",
        "precio": 120000,
        "img": "./img/bluelabel.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Johnnie Walker Blue Label, un whisky premium de sabor excepcional."
    },
    {
        "id": 15,
        "nombre": "Federio de Alvear",
        "precio": 5800,
        "img": "./img/fede.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Federico de Alvear, un vermut de sabor característico."
    },
    {
        "id": 16,
        "nombre": "London",
        "precio": 9000,
        "img": "./img/london.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "London, un gin con un perfil aromático distintivo."
    },
    {
        "id": 17,
        "nombre": "Santa Filomena",
        "precio": 3100,
        "img": "./img/filomena.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Santa Filomena, un vino con cuerpo y carácter."
    },
    {
        "id": 18,
        "nombre": "Cosecha Tardia",
        "precio": 5800,
        "img": "./img/cosecha.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Cosecha Tardia, un vino dulce con notas frutales."
    },
    {
        "id": 19,
        "nombre": "Termidor",
        "precio": 1600,
        "img": "./img/temineitor.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Termidor, un aperitivo ideal para cualquier ocasión."
    },
    {
        "id": 20,
        "nombre": "Sidra 1888",
        "precio": 5000,
        "img": "./img/sidra.png",
        "categoria": "Bebidas Alcohólicas",
        "descripcion": "Sidra 1888, una sidra refrescante y frutal."
    },
    {
        "id": 21,
        "nombre": "Coca Cola",
        "precio": 2800,
        "img": "./img/coca.png",
        "categoria": "Bebidas No Alcohólicas",
        "descripcion": "Coca Cola, la bebida refrescante clásica."
    },
    {
        "id": 22,
        "nombre": "Sprite",
        "precio": 2800,
        "img": "./img/sprite.png",
        "categoria": "Bebidas No Alcohólicas",
        "descripcion": "Sprite, un refresco de limón y lima, perfecto para refrescarte."
    },
    {
        "id": 23,
        "nombre": "Manaos Pomelo",
        "precio": 1400,
        "img": "./img/pomelo.png",
        "categoria": "Bebidas No Alcohólicas",
        "descripcion": "Manaos Pomelo, un refresco de sabor cítrico único."
    },
    {
        "id": 24,
        "nombre": "Speed",
        "precio": 1100,
        "img": "./img/speed.png",
        "categoria": "Energisantes",
        "descripcion": "Speed, una bebida energética refrescante."
    }

]

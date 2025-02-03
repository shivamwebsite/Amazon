const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        url:'https://m.media-amazon.com/images/I/41ELvuA1ewL._SX300_SY300_QL70_FMwebp_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/41ELvuA1ewL._SX300_SY300_QL70_FMwebp_.jpg', 
        title: {
            shortTitle: 'Makeup Kit for Women',
            longTitle: 'Colors Queen Cat Walk Makeup Kit with 32 Matte, Shimmer & Glitter Eyeshadows, 3 Highlighters, 3 Compact Powder & Applicator'
        }, 
        price: {
            mrp: 1149,
            cost: 899,
            discount: '22%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Visit the COLORS QUEEN Store' 
    },
    { 
        id: 'product7',
        url:'https://rukminim2.flixcart.com/image/312/312/xif0q/stuffed-toy/j/z/r/reversible-blue-pink-octopus-soft-toy-for-baby-girl-kids-boys-25-original-imah2hnqygmhzkgd.jpeg?q=70&crop=false',
        detailUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/stuffed-toy/j/z/r/reversible-blue-pink-octopus-soft-toy-for-baby-girl-kids-boys-25-original-imah2hnqygmhzkgd.jpeg?q=70&crop=false', 
        title: {
            shortTitle: 'Soft Toy',
            longTitle: 'Toyingly Reversible Blue Pink Octopus Soft Toy for Baby Girl Kids Boys'
        }, 
        price: {
            mrp: 999,
            cost: 122,
            discount: '87%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Character: Octopus' 
    },
    { 
        id: 'product8',
        url:'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/p/o/6-gola-black-6-hotstyle-black-original-imah8gfmfhhmu9cc.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/p/o/6-gola-black-6-hotstyle-black-original-imah8gfmfhhmu9cc.jpeg?q=70', 
        title: {
            shortTitle: 'HOTSTYLE',
            longTitle: 'AIR-2 ORANGE-8 Sneakers For Men '
        }, 
        price: {
            mrp: 1499,
            cost: 425,
            discount: '71%'
        },
        description: '',
        discount: 'Under ₹499', 
        tagline: 'HotstyleProducts' 
    },
    { 
        id: 'product9',
        url:'https://m.media-amazon.com/images/I/61UNThaGjYL._AC_UY327_FMwebp_QL65_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/61UNThaGjYL._AC_UY327_FMwebp_QL65_.jpg', 
        title: {
            shortTitle: 'Noise Buds N1',
            longTitle: 'Noise Buds N1 Pro in-Ear Truly Wireless Earbuds with Metallic Finish, ANC(Upto 30dB), 60H of Playtime, Dual Pairing, Instacharge(10 min=200 min), BT v5.3(Chrome Black)'
        }, 
        price: {
            mrp: 4999,
            cost: 1799,
            discount: '64%'
        },
        description: "ANC (up to 32 dB) - Listen to your playlists just the way you like it—without any background disturbances.Metallic + chrome finish - With a sheen that stands out, these aren’t your regular earbuds. They’re a style statement with a sleek finish.Up to 60 hours of playtime - Get your playlists queued and ready because these earbuds bring you incredible playtime.11mm driver - Made for all the audiophiles, these earbuds bring you a dynamic and well-balanced audio experience.",
        discount: 'Under 2k', 
        tagline: 'No Cost EMI available' 
    },
    { 
        id: 'product10',
        url:'https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/l/s/k/texture-makeup-kit-of-14-makeup-items-ar15-14-kit-a12-ar09-syzol-original-imah42e3a6bhgghj.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/l/s/k/texture-makeup-kit-of-14-makeup-items-ar15-14-kit-a12-ar09-syzol-original-imah42e3a6bhgghj.jpeg?q=70', 
        title: {
            shortTitle: 'Makeup Kit',
            longTitle: 'Syzol Texture Makeup kit of 14 makeup items AR15 (14 Items in the set)'
        }, 
        price: {
            mrp: 1399,
            cost: 317,
            discount: '77%'
        },
        description: '',
        discount: 'Under ₹499', 
        tagline: 'Face Makeup Combo' 
    },
]

module.exports = products;
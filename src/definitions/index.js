import { zipObj } from "ramda";

import iphone1_img from '../assets/imgs/1.iPhone_1.png';
import iphone3_img from '../assets/imgs/2.IPhone_3G.png';
import iphone4_img from '../assets/imgs/4.IPhone_4.png';
import iphone5_img from '../assets/imgs/6.IPhone_5.png';
import iphone6_img from '../assets/imgs/8.IPhone6.png';

const routes = [
    '/iphone1',
    '/iphone3',
    '/iphone4',
    '/iphone5',
    '/iphone6'
];

const routesName = zipObj(
    routes,
    [
        'iPhone1',
        'iPhone3',
        'iPhone4',
        'iPhone5',
        'iPhone6'
    ]
);

const iphoneImgs = zipObj(
    routes,
    [
        iphone1_img,
        iphone3_img,
        iphone4_img,
        iphone5_img,
        iphone6_img
    ]
);

const iphoneStats = zipObj(
    routes,
    [
        {

        }
    ]
)

export {
    iphoneImgs,
    routes,
    routesName
};
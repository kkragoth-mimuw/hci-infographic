import { zipObj } from "ramda";
import Papa from 'papaparse';

import iphone1_img from '../assets/imgs/1.iPhone_1.png';
import iphone3_img from '../assets/imgs/2.IPhone_3G.png';
import iphone3gs_img from '../assets/imgs/3.IPhone_3Gs.png';
import iphone4_img from '../assets/imgs/4.IPhone_4.png';
import iphone4s_img from '../assets/imgs/5.IPhone4S.png'
import iphone5_img from '../assets/imgs/6.IPhone_5.png';

import rawCsv from "./actionsCsv";

const actionsCsv = Papa.parse(rawCsv, { header: true }).data;

const routes = [
    '/iphone1',
    '/iphone3',
    '/iphone3gs',
    '/iphone4',
    '/iphone4s',
    '/iphone5',
];

const routesName = zipObj(
    routes,
    [
        'iPhone',
        'iPhone 3G',
        'iPhone 3GS',
        'iPhone 4',
        'iPhone 4S',
        'iPhone 5',
    ]
);

const iphoneImgs = zipObj(
    routes,
    [
        iphone1_img,
        iphone3_img,
        iphone3gs_img,
        iphone4_img,
        iphone4s_img,
        iphone5_img,
    ]
);

const iphoneStats = zipObj(
    routes,
    [
        {
            title: 'iPhone 1',
            startDate: '2007-01-03',
            endDate: '2012-08-21',
            firstColumn: [
                '16 gb',
                '512ram'
            ],
            secondColumn: [
                'secondaryText',
                'greyedOutText'
            ]
        },
        {
            title: 'iPhone 3G',
            startDate: '2009-02-23',
            endDate: '2011-09-14',
            firstColumn: [
                '16 gb',
                '512ram',
                'different info'
            ],
            secondColumn: [
                'secondaryText',
                'greyedOutText'
            ]
        },
        {
            title: 'iPhone 3GS',
            startDate: '2007-01-03',
            endDate: '2012-08-21',
            firstColumn: [
                '16 gb',
                '512ram'
            ],
            secondColumn: [
                'secondaryText',
                'greyedOutText'
            ]
        },
        {
            title: 'iPhone 4',
            startDate: '2007-01-03',
            endDate: '2012-08-21',
            firstColumn: [
                '16 gb',
                '512ram'
            ],
            secondColumn: [
                'secondaryText',
                'greyedOutText'
            ]
        },
        {
            title: 'iPhone 4S',
            startDate: '2007-01-03',
            endDate: '2012-08-21',
            firstColumn: [
                '16 gb',
                '512ram'
            ],
            secondColumn: [
                'secondaryText',
                'greyedOutText'
            ]
        },
        {
            title: 'iPhone 5',
            startDate: '2007-01-03',
            endDate: '2012-08-21',
            firstColumn: [
                '16 gb',
                '512ram'
            ],
            secondColumn: [
                'secondaryText',
                'greyedOutText'
            ]
        }
    ]
)

// https://en.wikipedia.org/wiki/IPhone#History_and_availability
const specialDates = [
    {
        date: '2007-06-29',
        label: 'iPhone 1 Release',
    },
    {
        date: '2008-07-11',
        label: 'iPhone 3G Release',
    },
];

export {
    iphoneImgs,
    routes,
    routesName,
    actionsCsv,
    iphoneStats,
    specialDates
};

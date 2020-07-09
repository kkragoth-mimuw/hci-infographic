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
];

const routesName = zipObj(
    routes,
    [
        'iPhone',
        'iPhone 3G',
        'iPhone 3GS',
        'iPhone 4',
        'iPhone 4S',
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
    ]
);

const iphoneStats = zipObj(
    routes,
    [
        {
            title: 'iPhone 1',
            startDate: '2007-03-29',
            endDate: '2008-10-10',
            firstColumn: [
                ['128', 'MB eDRAM'],
                ['4/8/16', 'GB flash memory'],
                ['3.5"', 'screen'],
                ['2.0', 'MP camera']
            ],
            secondColumn: [
                '"Apple reinvents the phone."',
                '$499 launch price',
                '6.1 million units sold',
            ]
        },
        {
            title: 'iPhone 3G',
            startDate: '2008-04-11',
            endDate: '2009-09-21',
            firstColumn: [
                ['128', 'MB eDRAM'],
                ['8/16', 'GB flash memory'],
                ['3.5"', 'screen'],
                ['2.0', 'MP camera with geotagging']
            ],
            secondColumn: [
                '"The first phone to beat the iPhone."',
                'new hardware features: GPS, 3G',
                '$299/$499 launch price'
            ]
        },
        {
            title: 'iPhone 3GS',
            startDate: '2009-03-19',
            endDate: '2010-09-24',
            firstColumn: [
                ['256', 'MB DRAM'],
                ['8/16/32', 'GB'],
                ['3', 'MP with video']
            ],
            secondColumn: [
                '"The fastest, smartest phone yet."',
                '$199/$299/$599/$699 launch prices'
            ]
        },
        {
            title: 'iPhone 4',
            startDate: '2010-03-24',
            endDate: '2012-02-14',
            firstColumn: [
                ['512', 'MB DRAM'],
                ['8/16/32', 'GB'],
                ['5', 'MP 720p Video']
            ],
            secondColumn: [
                '"This changes everything. Again."',
                'brand new Retina display',
                'iOS4 introduces multitasking features'
            ]
        },
        {
            title: 'iPhone 4S',
            startDate: '2011-09-14',
            endDate: '2012-11-21',
            firstColumn: [
                ['512', 'MB DDR2 RAM'],
                ['8/16/32/64', 'GB'],
                ['8', 'MP 1080p Video']
            ],
            secondColumn: [
                '"The most amazing iPhone yet."',
                '"S" stands for Siri'
            ]
        }
    ]
)

// https://en.wikipedia.org/wiki/IPhone#History_and_availability
const specialDates = [
    {
        date: '2007-06-29',
        label: 'iPhone 1 Release',
        shortLabel: 'iPhone 1 Release',
        showOn: routes[0],
        showOnChart: true
    },
    {
        date: '2007-10-26',
        label: 'Mac OS X Leopard Release',
        shortLabel: 'OS X Leopard',
        showOn: routes[0],
        showOnChart: true
    },
    {
        date: '2008-01-29',
        label: 'MacBook Air Release',
        shortLabel: 'MacBook Air',
        showOn: routes[0],
        showOnChart: true
    },
    {
        date: '2008-07-10',
        label: 'Apple introduced native mobile apps for iOS',
        shortLabel: 'Native Mobile Apps',
        showOn: routes[0],
        showOnChart: true
    },
    {
        date: '2008-07-11',
        label: 'iPhone 3G Release',
        shortLabel: '3G Release',
        showOn: routes[1],
        showOnChart: true
    },
    {
        date: '2008-09-15',
        label: 'Lehman Brothers declared bankruptcy',
        shortLabel: 'Lehman Bankruptcy',
        showOn: routes[1],
        showOnChart: true
    },
    {
        date: '2009-06-08',
        label: 'Mac OS X Snow Leopard Release',
        shortLabel: 'Snow Leopard',
        showOn: routes[1],
        showOnChart: true
    },
    {
        date: '2009-06-19',
        label: 'iPhone 3GS Release',
        shortLabel: '3GS Release',
        showOn: routes[2],
        showOnChart: true
    },
    {
        date: '2009-07-24',
        label: "Obama's economic stimulus plan",
        shortLabel: "Obama's plan",
        showOn: routes[2],
        showOnChart: true
    },
    {
        date: '2010-04-01',
        label: 'iPad Release',
        shortLabel: 'iPad Release',
        showOn: routes[2],
        showOnChart: true
    },
    {
        date: '2010-06-21',
        label: 'iPhone 4 Release',
        shortLabel: 'iPhone 4 Release',
        showOn: routes[3],
        showOnChart: true
    },
    {
        date: '2011-04-21',
        label: "Apple stock outperforms Microsoft's",
        shortLabel: 'Apple outperforms Microsoft',
        showOn: routes[3],
        showOnChart: true
    },
    {
        date: '2011-10-14',
        label: 'iPhone 4S release',
        shortLabel: '4S release',
        showOn: routes[4],
        showOnChart: true
    },
    {
        date: '2011-10-05',
        label: 'Steve Jobs dies; Tim Cook takes over',
        shortLabel: "Steve Jobs' Death",
        showOn: routes[4],
        showOnChart: true
    },
    {
        date: '2012-03-19',
        label: 'Apple announces plans to initiate a dividend and share repurchase program',
        shortLabel: 'Repurchase program',
        showOn: routes[4],
        showOnChart: true
    },
    {
        date: '2012-06-11',
        label: 'First Retina MacBook Pro Release',
        shortLabel: 'First Retina Macbook',
        showOn: routes[4],
        showOnChart: true
    }
];

export {
    iphoneImgs,
    routes,
    routesName,
    actionsCsv,
    iphoneStats,
    specialDates
};

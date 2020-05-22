import React, { useEffect } from 'react';
import { isNil } from 'ramda';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import {HotKeys} from "react-hotkeys";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import StatisticPage from '../StatisticPage';



function Page({color, prevIndex, index, myIndex, children}) {
    const location = useLocation();

    const last_update = useEffect(() =>  () => console.log(color, location, index))

    const initialLocation = (isNil(prevIndex) || prevIndex < myIndex) ? '100vw' : '-100vw';
    const exitLocation = (index >= myIndex) ? '-100vw' : '100vw';

    console.log(color, myIndex, index, location.pathname, prevIndex, initialLocation, exitLocation);

    return (
        // <AnimatePresence exitBeforeEnter>
        <motion.div
            key={myIndex}
            initial={{ x: initialLocation}}
            animate={{ x: 0}}
            exit={{ x: exitLocation}}
            transition={{ ease: "easeOut", duration: 0.4 }}
            style={{position: 'absolute', top:0, left: 0,zIndex: 100-myIndex, width: '100vw', height: '100vh', backgroundColor: "424242"}}>
            <StatisticPage/>
        </motion.div>
        // </AnimatePresence>
    )
}

export default Page;

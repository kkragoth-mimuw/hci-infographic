import React, { useEffect } from 'react';
import { isNil } from 'ramda';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

import {TopMenuHeight} from "../../containers/TopMenu";
import StatisticPage from '../StatisticPage';


function Page({val, color, prevIndex, index, myIndex, children}) {
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
            style={{position: 'absolute', top:TopMenuHeight, left: 0,zIndex: 100-myIndex, width: '100vw', height: `calc(100vh - ${TopMenuHeight}px)`, backgroundColor: "424242"}}>
            <StatisticPage val={val}/>
        </motion.div>
        // </AnimatePresence>
    )
}

export default Page;

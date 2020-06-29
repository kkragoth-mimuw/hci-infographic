import React, { useEffect } from 'react';
import { isNil } from 'ramda';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

import {TopMenuHeight} from "../../containers/TopMenu";
import styled from "styled-components";


function WelcomePage({val, color, prevIndex, index, myIndex, children}) {
    const location = useLocation();

    const initialLocation = (isNil(prevIndex) || prevIndex < myIndex) ? '100vw' : '-100vw';
    const exitLocation = (index >= myIndex) ? '-100vw' : '100vw';

    return (
        <motion.div
            key={myIndex}
            initial={{ x: initialLocation}}
            animate={{ x: 0}}
            exit={{ x: exitLocation}}
            transition={{ ease: "easeOut", duration: 0.4 }}
            style={{position: 'absolute', top:TopMenuHeight, left: 0,zIndex: 100-myIndex, width: '100vw', height: `calc(100vh - ${TopMenuHeight}px)`, backgroundColor: "424242"}}>
            <WelcomePageWrapper>
                <p style={{fontFamily: 'inter', fontSize: '1.55rem', color: 'white', opacity: 0.8}}>Welcome!</p>
                <p style={{fontFamily: 'inter', fontSize: '1.25rem', color: 'white', opacity: 0.8, marginTop: '0.5rem'}}>Select iPhone from Top Menu to view its stats</p>
            </WelcomePageWrapper>
        </motion.div>
    )
}

const WelcomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    background: #121213;
    justify-content: center;
    align-items: center;
`;


export default WelcomePage;

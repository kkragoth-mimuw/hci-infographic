import React from 'react';
import styled from 'styled-components';
import { mapIndexed } from "../../utils";

import { routes } from "../Main";
import TopMenuItem from "../../components/TopMenuItem";

const TopMenuHeight = 50;

function TopMenu(props) {
    const { currentIndex } = props;
    return (
        <TopMenuWrapper className="noselect">
            { mapIndexed((val, idx) => <TopMenuItem val={val} idx={idx+1} goToIndex={props.goToIndex} currentIndex={currentIndex+1}/>, routes) }
        </TopMenuWrapper>
    );
}

const TopMenuWrapper = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    height: ${TopMenuHeight}px;
    max-height: ${TopMenuHeight}px;
    width: 100vw;
    max-width: 100vw;
    background: #171719;
    overflow-y: hidden;
    overflow-x: scroll;
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
`;

export default TopMenu;

export {
    TopMenuHeight
};

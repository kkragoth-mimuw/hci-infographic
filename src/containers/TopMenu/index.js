import React from 'react';
import styled from 'styled-components';
import { mapIndexed } from "../../utils";

import { routes } from "../Main";
import TopMenuItem from "../../components/TopMenuItem";

const TopMenuHeight = 60;

function TopMenu(props) {
    return (
        <TopMenuWrapper className="noselect">
            { mapIndexed((val, idx) => <TopMenuItem val={val} idx={idx+1} goToIndex={props.goToIndex}/>, routes) }
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
    background: #171719
`;

export default TopMenu;

export {
    TopMenuHeight
};